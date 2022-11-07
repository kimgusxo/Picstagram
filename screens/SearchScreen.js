import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MaterialSearchBar from '../components/MaterialSearchBar';
import UserSmallProfile from '../components/UserSmallProfile';

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.materialSearchBarStack}>
        <MaterialSearchBar style={styles.materialSearchBar} />
        <UserSmallProfile style={styles.userSmallProfile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialSearchBar: {
    height: 56,
    position: 'absolute',
    left: 140,
    top: 0,
    right: 0,
  },
  userSmallProfile: {
    position: 'absolute',
    left: 0,
    top: 52,
    height: 79,
    right: 140,
  },
  materialSearchBarStack: {
    height: 131,
    marginTop: 404,
    marginLeft: 40,
    marginRight: -180,
  },
});

export default SearchScreen;
