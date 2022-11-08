import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SearchTextBox from './SearchTextBox';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function SearchTab(props) {
  return (
    <View style={[styles.container, props.style]}>
        <View style={styles.prevRow}>
            <TouchableOpacity style={styles.prevButton} onPress={() => props.navigation.goBack()}>
              <FeatherIcon name="arrow-left" style={styles.prevIcon} />
            </TouchableOpacity>
          <SearchTextBox style={styles.searchTextBox} />

              <TouchableOpacity style={styles.searchButton}>
                <IoniconsIcon name="md-search" style={styles.searchIcon} />
              </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  prev: {
    width: 30,
    height: 30,
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
    width: 300,
    alignSelf: 'center',
  },
  search: {
    width: 30,
    height: 33,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  searchButton: {
    height: 30,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  searchIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
  },
  prevRow: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
});

export default SearchTab;
