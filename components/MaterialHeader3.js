import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialHeader3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon name="menu" style={styles.leftIcon} />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Title
          </Text>
        </View>
      </View>
      <View style={styles.leftIconButtonRowFiller} />
      <View style={styles.rightIconsWrapper}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="magnify"
            style={styles.rightIcon1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon name="heart" style={styles.rightIcon2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.rightIcon3}
          />
        </TouchableOpacity>
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
  leftIconButton: {
    padding: 11,
  },
  leftIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  textWrapper: {
    alignSelf: 'flex-end',
    marginLeft: 45,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
  leftIconButtonRow: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 19,
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  rightIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  iconButton: {
    padding: 11,
  },
  rightIcon1: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  rightIcon2: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  rightIcon3: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default MaterialHeader3;
