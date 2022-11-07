import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialHeader2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapperRow}>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.picstagram}>
            Picstagram
          </Text>
        </View>
        <FeatherIcon name="plus" style={styles.icon2} />
      </View>
      <View style={styles.textWrapperRowFiller} />
      <TouchableOpacity style={styles.button}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="magnify"
            style={styles.rightIcon1}
          />
        </TouchableOpacity>
      </TouchableOpacity>
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
    marginTop: 17,
  },
  picstagram: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    marginLeft: 257,
  },
  textWrapperRow: {
    height: 30,
    flexDirection: 'row',
    marginLeft: 23,
    marginTop: 11,
  },
  textWrapperRowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
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
});

export default MaterialHeader2;
