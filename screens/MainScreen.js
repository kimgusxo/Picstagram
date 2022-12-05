import React, { useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  Dimensions,
  FlatList,
} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';
import { loadingMainPage } from '../api/PostApi';
import { findMyInfoByEmail } from '../api/UserApi';
import { ActivityIndicator } from '@react-native-material/core';

// timeout for refreshing
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// eslint-disable-next-line no-unused-vars
function MainScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [postList, setPostList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [getMorePost, setGetMorePost] = React.useState(false);
  const POST_OFFSET = 10;
  const initialPostList = useRef([]);
  const userToken = useRef();
  const userInfo = useRef({ id: '' });
  let cursor = useRef(0);
  let isLastPost = useRef(false);

  useEffect(() => {
    //
    /***
     *  When this screen is Mounted,
     *
     * condition
     *   1. My follower's post
     *   2. Public post
     *   3. Can do paging (Need cursor for paging)
     *
     * orderBy : date asc
     */

    // Fetching Data
    async function fetchData() {
      // Initailizaing

      // Get userToken
      userToken.current = firebase.auth().currentUser;

      // Set user information by userToken
      [userInfo.current] = await findMyInfoByEmail(userToken.current.email);

      // Get Initail PostList
      initialPostList.current = await loadingMainPage(userInfo.current.id);

      // Get Next PostList and Set Current PostList
      let temp;
      isLastPost.current = cursor.current + POST_OFFSET > initialPostList.current.length;
      if (!isLastPost.current)
        temp = initialPostList.current.slice(cursor.current, cursor.current + POST_OFFSET);
      else temp = initialPostList.current.slice(cursor.current, initialPostList.current.length);
      cursor.current += POST_OFFSET;
      setPostList((postList) => [...postList, ...temp]);
    }

    fetchData().then(() => {
      setIsLoading(false);
    });

    return () => {
      cursor.current = 0;
      isLastPost.current = false;
      initialPostList.current.length = 0;
      setPostList([]);
    };
  }, [initialPostList]);

  const onRefresh = React.useCallback(() => {
    console.log('리프레쉬 이후 작업을 이곳에 기술하세요.');

    // Initialazation
    cursor.current = 0;
    isLastPost.current = false;
    initialPostList.current.length = 0;
    setPostList([]);

    // Fetching Data
    async function fetchData() {
      // Get userToken
      userToken.current = firebase.auth().currentUser;

      // Set user information by userToken
      [userInfo.current] = await findMyInfoByEmail(userToken.current.email);

      // Get Initail PostList and Set Current PostList
      initialPostList.current = await loadingMainPage(userInfo.current.id);

      let temp;
      isLastPost.current = cursor.current + POST_OFFSET > initialPostList.current.length;
      if (!isLastPost.current)
        temp = initialPostList.current.slice(cursor.current, cursor.current + POST_OFFSET);
      else temp = initialPostList.current.slice(cursor.current, initialPostList.current.length);
      cursor.current += POST_OFFSET;
      setPostList((postList) => [...postList, ...temp]);
    }

    // Refetching Data
    setRefreshing(true);
    fetchData().then(() => {
      console.log(initialPostList.current.length);
      wait(2000).then(() => setRefreshing(false));
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} navigation={navigation} userInfo={userInfo.current} />
      </View>
      <FlatList
        keyExtractor={(postList, index) => postList.title + index}
        extraData={postList}
        data={postList}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={(post) => {
          return (
            <PostComponent
              key={post.item.key}
              style={styles.postComponent}
              navigation={navigation}
              userInfo={userInfo.current}
              post={post.item}
              likeCnt={post.item.like}
            />
          );
        }}
        onScrollEndDrag={async (e) => {
          let windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height + 100,
            offset = e.nativeEvent.contentOffset.y;

          if (windowHeight + offset >= height) {
            if (!getMorePost) {
              if (isLastPost.current) {
                // End of PostList
                console.log('End of PostList');
              } else {
                // ScrollEnd, do sth...
                // isLoadingMorePostList 등으로 detecting을 동기적으로 처리하면 너무 많은 포스트를 가져오지 않게 할 수 있음
                console.log('Get more PostList');
                console.log('cursor', cursor.current);

                setGetMorePost(true);

                // Get Initail PostList and Set Current PostList
                let temp;
                isLastPost.current = cursor.current + POST_OFFSET > initialPostList.current.length;
                if (!isLastPost.current)
                  temp = initialPostList.current.slice(
                    cursor.current,
                    cursor.current + POST_OFFSET,
                  );
                else
                  temp = initialPostList.current.slice(
                    cursor.current,
                    initialPostList.current.length,
                  );
                cursor.current += POST_OFFSET;
                setPostList((postList) => [...postList, ...temp]);
                setTimeout(() => {
                  setGetMorePost(false);
                }, 3000);
              }
            }
          }
        }}
      />
      <View>
        <FooterMain
          style={styles.footerMain}
          navigation={navigation}
          userInfo={userInfo.current}
          profileInfo={userInfo.current}
        />
      </View>
    </>
  );
}

const Loading = () => {
  return (
    <View>
      <HeaderMain style={styles.headerMain} />
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={60} color={'#3F51B5'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerMain: {
    height: 56,
  },
  postComponent: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(155,155,155,0.5)',
  },
  footerMain: {
    height: 56,
  },
});

export default MainScreen;
