import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import FollowListTabs from '../components/FollowListTabs';
import FollowerSmallProfile from '../components/FollowerSmallProfile';
import FollowingSmallProfile from '../components/FollowingSmallProfile';
import { findUserById } from '../api/UserApi';

function FollowListScreen({ navigation, route }) {
  const [token, setToken] = useState(route.params.token);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ProfileHeader style={styles.profileHeader} navigation={navigation} />
      <FollowListTabs style={styles.followListTabs} token={token} setToken={setToken} />
      <ScrollView contentContainerStyle={styles.followList}>
        {token
          ? route.params.user.followerList.map((index, key) => (
              <FollowerSmallProfile
                key={key}
                style={styles.userSmallProfile}
                follower={index}
                user={route.params.user}
                setUser={route.params.setUser}
                setFollowerCnt={route.params.setFollowerCnt}
                userInfo={route.params.userInfo}
                navigation={navigation}
              />
            ))
          : route.params.user.followingList.map((index, key) => (
              <FollowingSmallProfile
                key={key}
                style={styles.userSmallProfile}
                following={index}
                user={route.params.user}
                setUser={route.params.setUser}
                setFollowingCnt={route.params.setFollowingCnt}
                userInfo={route.params.userInfo}
                navigation={navigation}
              />
            ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    height: 56,
  },
  followListTabs: {
    height: 56,
  },
  followList: {
    paddingVertical: 15,
  },
  userSmallProfile: {
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
});

export default FollowListScreen;
