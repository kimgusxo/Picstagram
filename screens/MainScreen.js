import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, RefreshControl, Dimensions } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';
import { findPostList, loadingMainPage } from '../api/PostApi';
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
  const POST_OFFSET = 2;
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

    // Get my Id

    fetchData().then(async () => {
      await printState().then(() => setIsLoading(false));
    });
  }, []);

  const printState = async () => {
    console.log('================================================');
    console.log('userInfo', userInfo.current);
    console.log('initialPostList.length', initialPostList.current.length);
    console.log('curPostList\n');
    postList.forEach((e) => console.log(e, '\n'));
    console.log('cursor', cursor.current);
    console.log('isLastPost', isLastPost.current);
    console.log('================================================\n\n');
  };

  // Fetching Data
  async function fetchData() {
    // Get userToken
    userToken.current = firebase.auth().currentUser;

    // Set user information by userToken
    userInfo.current = await findMyInfoByEmail(userToken.current.email);
    userInfo.current = userInfo.current[0];

    // Get Initail PostList and Set Current PostList
    initialPostList.current = await loadingMainPage(userInfo.current.id);
    setPostList(await getNextPostList());
  }

  const getNextPostList = async () => {
    let temp = [];
    if (cursor.current + POST_OFFSET <= initialPostList.current.length) {
      temp = initialPostList.current.slice(cursor.current, cursor.current + POST_OFFSET);
      cursor.current += POST_OFFSET;
    } else {
      temp = initialPostList.current.slice(cursor.current, initialPostList.current.length);
      cursor.current += initialPostList.current.length - cursor.current;
      isLastPost.current = true;
    }

    return temp;
  };

  const onRefresh = React.useCallback(() => {
    console.log('리프레쉬 이후 작업을 이곳에 기술하세요.');

    // Initialazation
    cursor.current = 0;
    isLastPost.current = false;
    initialPostList.current.length = 0;

    // Refetching Data
    setRefreshing(true);
    fetchData().then(() => {
      printState();
      wait(2000).then(() => setRefreshing(false));
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} navigation={navigation} />
      </View>
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        // Detecting that the scroll touches the end of ScrollView
        onScroll={async (e) => {
          let windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height + 60,
            offset = e.nativeEvent.contentOffset.y;

          if (windowHeight + offset >= height) {
            if (isLastPost.current) {
              // End of PostList
              console.log('End of PostList');
            } else {
              // ScrollEnd, do sth...
              // isLoadingMorePostList 등으로 detecting을 동기적으로 처리하면 너무 많은 포스트를 가져오지 않게 할 수 있음
              console.log('Get more PostList');
              console.log('cursor', cursor.current);
              setPostList(postList.concat(await getNextPostList()));
            }
          }
        }}
      >
        {postList.map((post, index) => {
          return (
            <PostComponent
              key={index}
              style={styles.postComponent}
              navigation={navigation}
              userInfo={userInfo}
              post={post}
            />
          );
        })}
      </ScrollView>
      <View>
        <FooterMain
          style={styles.footerMain}
          navigation={navigation}
          route={{ userInfo: userInfo }}
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
