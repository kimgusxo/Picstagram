import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

function UpdatePostingFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.homeButtonRow}>
        <TouchableOpacity style={styles.homeButton}>
          <EntypoIcon name="home" style={styles.homeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <MaterialIconsIcon name="cancel" style={styles.cancelIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <EntypoIcon name="user" style={styles.userIcon} />
        </TouchableOpacity>
      </View>
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
  homeButton: {
    width: 40,
    height: 44,
  },
  homeIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    flex: 0.15,
  },
  cancelButton: {
    width: 40,
    height: 40,
    marginLeft: 80,
    marginTop: 2,
  },
  cancelIcon: {
    color: 'rgba(208,2,27,1)',
    fontSize: 40,
  },
  profileButton: {
    width: 40,
    height: 44,
    marginLeft: 80,
  },
  userIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    flex: 0.15,
  },
  homeButtonRow: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 6,
  },
});

export default UpdatePostingFooter;
