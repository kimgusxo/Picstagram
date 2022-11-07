import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function HeaderLogo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.picstagram}>
          Picstagram
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
  textWrapper: {
    height: 30,
    marginLeft: 23,
    marginTop: 16,
  },
  picstagram: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
});

export default HeaderLogo;
