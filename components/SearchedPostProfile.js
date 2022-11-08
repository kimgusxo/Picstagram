import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function SearchedPostProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.postButtonRow}>
        <TouchableOpacity style={styles.postButton}>
          <View style={styles.postRow}>
            <View style={styles.thumbnail} />
            <Text style={styles.postTitle}>Post Title</Text>
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
