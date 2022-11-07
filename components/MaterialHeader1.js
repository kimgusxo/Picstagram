import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialHeader1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Icon name="menu" style={styles.leftIcon} />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Title
        </Text>
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
    marginLeft: 5,
    marginTop: 5,
  },
  leftIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  textWrapper: {
    alignSelf: 'flex-end',
    marginLeft: 45,
    marginBottom: 19,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
});

export default MaterialHeader1;
