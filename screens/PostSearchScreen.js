import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import SearchedPostProfile from '../components/SearchedPostProfile';
import SearchTab from '../components/SearchTab';

function PostSearchScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SearchTab style={styles.searchTab} />
      <ScrollView
        contentContainerStyle={
          styles.scrollArea_contentContainerStyle
        }>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
            <SearchedPostProfile style={styles.searchedPostProfile}/>
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
  searchedPostProfile: {
    height: 120,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
  searchTab: {
    height: 56,
  },
});

export default PostSearchScreen;
