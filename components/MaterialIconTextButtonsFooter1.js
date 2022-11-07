import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialIconTextButtonsFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon name="home" style={styles.icon1} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon name="camera" style={styles.activeIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon name="account" style={styles.icon2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
  },
  icon1: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    opacity: 0.8,
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
    left: 120,
    width: 120,
    top: 0,
    height: 56,
  },
  activeIcon: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    opacity: 0.8,
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
  },
  icon2: {
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    opacity: 0.8,
  },
});

export default MaterialIconTextButtonsFooter1;
