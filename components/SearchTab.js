import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SearchTextBox from './SearchTextBox';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function SearchTab(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.prevRow}>
          <View style={styles.prev}>
            <TouchableOpacity style={styles.prevButton}>
              <FeatherIcon name="arrow-left" style={styles.prevIcon} />
            </TouchableOpacity>
          </View>
          <SearchTextBox style={styles.searchTextBox} />
          <View style={styles.search}>
            <View style={styles.searchButtonStack}>
              <TouchableOpacity style={styles.searchButton} />
              <IoniconsIcon name="md-search" style={styles.searchIcon} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    flex: 1,
  },
  prev: {
    width: 30,
    height: 30,
    marginTop: 11,
  },
  prevButton: {
    width: 30,
    backgroundColor: 'rgba(255,255,255,1)',
    height: 30,
  },
  prevIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    height: 30,
    width: 30,
  },
  searchTextBox: {
    height: 43,
    width: 260,
    marginLeft: 10,
  },
  search: {
    width: 30,
    height: 33,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 11,
  },
  searchButton: {
    top: 1,
    left: 0,
    height: 30,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    right: 0,
  },
  searchIcon: {
    top: 0,
    left: 3,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  searchButtonStack: {
    height: 33,
  },
  prevRow: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 20,
    marginLeft: 10,
    marginTop: 7,
  },
});

export default SearchTab;
