import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  Dimensions,
  Text,
} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';
import { findPostList } from '../api/PostApi';
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
  const POST_OFFSET = 10;
  const initialPostList = useRef([]);
  let cursor = useRef(0);
  const MY_ID = 'dong_hui';
  let isLastPost = false;

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
    fetchData().then(() => {
      printState().then(() => setIsLoading(false));
    });
  }, []);

  const printState = async () => {
    console.log('initialPostList', initialPostList.current);
    console.log('MY_ID', MY_ID);
    console.log('isLastPost', isLastPost);
  };

  // Fetching Data
  async function fetchData() {
    initialPostList.current = await findPostList(MY_ID);
    setPostList(await getNextPostList());
  }

  const getNextPostList = async () => {
    let temp;
    if (cursor + POST_OFFSET <= initialPostList.current.length)
      temp = initialPostList.current.slice(cursor, cursor + POST_OFFSET);
    else {
      temp = initialPostList.current.slice(cursor, initialPostList.length);
      isLastPost = true;
    }
    return temp;
  };

  const onRefresh = React.useCallback(() => {
    console.log('리프레쉬 이후 작업을 이곳에 기술하세요.');

    // Initialazation
    cursor.current = 0;
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
            if (isLastPost) {
              // 마지막 포스트임을 어떻게 나타낼까.
              console.log('맨 마지막 포스트 리스트입니다.');
            } else {
              // ScrollEnd, do sth...
              console.log('맨 아래에 닿으면 새 게시물 가져오기');
              getNextPostList();
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
              post={post.data()}
            />
          );
        })}
      </ScrollView>
      <View>
        <FooterMain style={styles.footerMain} navigation={navigation} route={{ MY_ID: MY_ID }} />
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
