import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function FooterMain(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group3Row}>
        <View style={styles.group3}>
          <TouchableOpacity style={styles.home}>
            <EntypoIcon name="home" style={styles.homeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.group2}>
          <TouchableOpacity style={styles.camera}>
            <EntypoIcon name="camera" style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.user}>
            <EntypoIcon name="user" style={styles.userIcon} />
          </TouchableOpacity>
        </View>
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
  group3: {
    width: 120,
  },
  home: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
    width: 120,
    height: 56,
  },
  homeIcon: {
    top: 7,
    left: 40,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    flex: 0.03,
  },
  group2: {
    width: 120,
  },
  cameraIcon: {
    top: 7,
    left: 40,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    flex: 0.04,
  },
  camera: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
    flexDirection: 'row',
    width: 120,
    height: 56,
  },
  group: {
    width: 120,
  },
  user: {
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  userIcon: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: 'center',
    flexDirection: 'row',
    width: 120,
    height: 56,
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    marginLeft: 40,
  },
  group3Row: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});

export default FooterMain;
