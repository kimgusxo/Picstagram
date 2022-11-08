import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function OldPosting(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.oldPostSelected}>
        <Text style={styles.postTiltle}>post tiltle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  oldPostSelected: {
    backgroundColor: 'rgba(155,155,155,1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postTiltle: {
    flexDirection: 'row',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 30,
  },
});

export default OldPosting;
