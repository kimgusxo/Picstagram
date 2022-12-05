import React, { Component, useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import SearchedPostProfile from '../components/SearchedPostProfile';
import SearchTab from '../components/SearchTab';
import { findPostByTitle } from '../api/PostApi';

function PostSearchScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const [post, setPost] = useState({});

  const search = async () => {
    const info = await findPostByTitle(text);
    setPost(info);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SearchTab
        style={styles.searchTab}
        navigation={navigation}
        setText={setText}
        search={search}
      />
      <ScrollView contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        {post[0] != undefined
          ? post.map((index, key) => (
              <SearchedPostProfile
                key={key}
                style={styles.searchedPostProfile}
                post={index}
                navigation={navigation}
              />
            ))
          : null}
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
