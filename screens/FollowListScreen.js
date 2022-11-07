import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import CupertinoSegmentWithTwoTabs from '../components/CupertinoSegmentWithTwoTabs';
import UserSmallProfile from '../components/UserSmallProfile';

function FollowListScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ProfileHeader style={styles.profileHeader} />
      <CupertinoSegmentWithTwoTabs style={styles.followListTabs} />
      <View style={styles.followList}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.followList_contentContainerStyle}>
          <UserSmallProfile style={styles.userSmallProfile} />
        </ScrollView>
      </View>
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
    height: 528,
  },
  followList_contentContainerStyle: {
    height: 528,
  },
  userSmallProfile: {
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
});

export default FollowListScreen;
