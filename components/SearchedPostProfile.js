import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { getImageUrl } from '../api/StorageImage';
import { readImages } from '../api/PostApi';

function SearchedPostProfile(props) {
  const imageUrl = { uri: props.post.imageList[0].url };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.postButtonRow}>
        <TouchableOpacity
          style={styles.postButton}
          onPress={() =>
            props.navigation.navigate('DetailPost', { post: props.post, userInfo: props.myInfo })
          }
        >
          <View style={styles.postRow}>
            <View>
              <Image style={styles.thumbnail} source={imageUrl} />
            </View>
            <Text style={styles.postTitle}>{props.post.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  postButton: {
    width: 300,
    height: 120,
    flexDirection: 'row',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderWidth: 2,
    marginLeft: 15,
  },
  postTitle: {
    fontFamily: 'roboto-700',
    color: '#121212',
    marginLeft: 15,
    fontSize: 20,
  },
  postRow: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  postButtonRow: {
    height: 120,
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },
});

export default SearchedPostProfile;
