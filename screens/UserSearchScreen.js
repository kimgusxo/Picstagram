import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import UserSmallProfile from '../components/UserSmallProfile';
import SearchTab from '../components/SearchTab';

function UserSearchScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.group}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}>
            <UserSmallProfile style={styles.userSmallProfile} />
          </ScrollView>
        </View>
      </View>
      <SearchTab style={styles.searchTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    height: 484,
    marginTop: 56,
  },
  scrollArea: {
    height: 434,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  scrollArea_contentContainerStyle: {
    height: 434,
  },
  userSmallProfile: {
    height: 65,
  },
  searchTab: {
    height: 56,
    width: 360,
    marginTop: -540,
  },
});

export default UserSearchScreen;
