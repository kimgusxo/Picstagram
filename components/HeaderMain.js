import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

function HeaderMain(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapperRow}>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.picstagram}>
            Picstagram
          </Text>
        </View>
        <View style={styles.createPost}>
          <TouchableOpacity style={styles.createPostButton}>
            <FeatherIcon name="plus" style={styles.createPostIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <View style={styles.searchButtonStack}>
            <TouchableOpacity style={styles.searchButton}>
              <IoniconsIcon name="md-search" style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  textWrapper: {
    height: 18,
    marginTop: 5,
  },
  picstagram: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
  createPost: {
    width: 29,
    height: 34,
    marginLeft: 200,
  },
  createPostButton: {
    width: 30,
    height: 30,
    backgroundColor: '#3f51b5',
  },
  createPostIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    height: 30,
    width: 30,
  },
  search: {
    width: 30,
    height: 28,
    marginLeft: 10,
  },
  searchButton: {
    top: 2,
    left: 0,
    width: 31,
    height: 30,
    position: 'absolute',
    backgroundColor: '#3f51b5',
  },
  searchIcon: {
    top: 0,
    left: 4,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
  },
  searchButtonStack: {
    width: 31,
    height: 33,
  },
  textWrapperRow: {
    height: 34,
    flexDirection: 'row',
    flex: 1,
    marginRight: 17,
    marginLeft: 22,
    marginTop: 11,
  },
});

export default HeaderMain;
