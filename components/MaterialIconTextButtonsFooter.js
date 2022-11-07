import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

function MaterialIconTextButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log('Navigate to MainScreen')}
        style={styles.button3}
      />
      <TouchableOpacity style={styles.activeButtonWrapper} />
      <TouchableOpacity style={styles.buttonWrapper2} />
      <EntypoIcon name="home" style={styles.icon} />
      <MaterialIconsIcon name="cancel" style={styles.icon2} />
      <EntypoIcon name="user" style={styles.icon3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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
  button3: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
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
  icon: {
    top: 7,
    left: 43,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
  },
  icon2: {
    top: 8,
    left: 168,
    position: 'absolute',
    color: 'rgba(208,2,27,1)',
    fontSize: 40,
  },
  icon3: {
    top: 7,
    left: 293,
    position: 'absolute',
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
  },
});

export default MaterialIconTextButtonsFooter;
