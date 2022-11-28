import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function CreatePostHeader(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => props.navigation.navigate('Main')}
      >
        <EntypoIcon name="cross" style={styles.cancelIcon} />
      </TouchableOpacity>
      <View style={styles.cancelButtonFiller} />
      <TouchableOpacity style={styles.nextButton} onPress={() => props.navigation.navigate('Main')}>
        <MaterialCommunityIconsIcon name="arrow-right" style={styles.nextIcon} />
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
  cancelButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5,
  },
  cancelIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  cancelButtonFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    padding: 11,
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  nextIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default CreatePostHeader;
