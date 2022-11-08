import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import UserSmallProfile from '../components/UserSmallProfile';
import SearchTab from '../components/SearchTab';

function UserSearchScreen(props) {
  return (
      <View style={styles.container}>
        <StatusBar hidden />
        <SearchTab style={styles.searchTab} />
        <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
          <UserSmallProfile style={styles.userSmallProfile} />
        </ScrollView>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollArea_contentContainerStyle: {
    paddingVertical: 15,
    
  },
  userSmallProfile: {
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
  searchTab: {
    height: 56,
  },
});

export default UserSearchScreen;
