import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

function SearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.stackFiller} />
        <View style={styles.searchStack}>
          <TextInput placeholder="Search" style={styles.search} />
          <TouchableOpacity style={styles.cancelButton}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.cancelIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <EvilIconsIcon name="search" style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    padding: 4,
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  rect1: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 2,
    height: 22,
    width: 322,
    marginTop: 64,
    marginLeft: 78,
  },
  stackFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  search: {
    height: 26,
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'flex-start',
    width: 219,
    lineHeight: 16,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cancelButton: {
    padding: 11,
    position: 'absolute',
    top: 0,
    right: 177,
    alignItems: 'center',
    width: 42,
    height: 26,
  },
  cancelIcon: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    opacity: 0.6,
  },
  searchStack: {
    width: 219,
    height: 26,
    marginRight: 103,
  },
  searchIcon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 24,
    marginTop: -74,
    marginLeft: 293,
  },
});

export default SearchBar;
