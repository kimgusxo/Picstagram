import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput placeholder="Search" style={styles.inputStyle} />
        <EvilIconsIcon name="search" style={styles.icon} />
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon name="close" style={styles.rightIcon} />
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
  },
  rect1: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 2,
    height: 48,
    width: 367,
    alignSelf: 'center',
  },
  inputStyle: {
    height: 48,
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'flex-start',
    width: 250,
    lineHeight: 16,
    marginLeft: 46,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 24,
    height: 26,
    width: 24,
    flex: 1,
    marginRight: -323,
    marginLeft: 27,
    alignSelf: 'center',
  },
  rightIconButton: {
    padding: 11,
    alignItems: 'center',
    marginRight: 321,
  },
  rightIcon: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    opacity: 0.6,
  },
});

export default MaterialSearchBar;
