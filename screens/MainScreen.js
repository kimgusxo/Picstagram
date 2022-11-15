import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, RefreshControl } from 'react-native';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';

// timeout for refreshing
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// eslint-disable-next-line no-unused-vars
function MainScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = React.useState(false);

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
  }, []);

  const onRefresh = React.useCallback(() => {
    console.log('리프레쉬 이후 작업을 이곳에 기술하세요.');
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} navigation={navigation} />
      </View>
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
      </ScrollView>
      <View>
        <FooterMain style={styles.footerMain} navigation={navigation} />
      </View>
    </>
  );
}

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
