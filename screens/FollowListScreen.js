import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import FollowListTabs from '../components/FollowListTabs';
import FollowerSmallProfile from '../components/FollowerSmallProfile';
import FollowingSmallProfile from '../components/FollowingSmallProfile';
import { findUserById } from '../api/UserApi';

function FollowListScreen({ navigation, props }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(0);

  const test = async () => {
    const userId = 'gusxo';
    const a = await findUserById(userId);
    setUser(a);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ProfileHeader style={styles.profileHeader} navigation={navigation} />
      <FollowListTabs style={styles.followListTabs} setToken={setToken} />
      <ScrollView contentContainerStyle={styles.followList}>
        {token == 0
          ? user[0].followerList.map((index, key) => (
              <FollowerSmallProfile
                key={key}
                style={styles.userSmallProfile}
                follower={index}
                user={user[0]}
                navigation={navigation}
              />
            ))
          : user[0].followingList.map((index, key) => (
              <FollowingSmallProfile
                key={key}
                style={styles.userSmallProfile}
                following={index}
                user={user[0]}
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
