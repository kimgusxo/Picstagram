import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function UserSmallProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.userButtonRow}>
        <TouchableOpacity style={styles.userButton}>
          <View style={styles.userIconRow}>
            <EntypoIcon name="user" style={styles.userIcon} />
            <Text style={styles.userId}>user_ID</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancleButton}>
          <EntypoIcon name="cross" style={styles.cancleIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  userButton: {
    width: 228,
    height: 44,
    flexDirection: 'row',
  },
  userIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
  },
  userId: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
    marginLeft: 21,
    marginTop: 10,
  },
  userIconRow: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 97,
  },
  cancleButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginLeft: 71,
    marginTop: 2,
  },
  cancleIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    alignSelf: 'center',
  },
  userButtonRow: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 12,
    marginTop: 18,
  },
});

export default UserSmallProfile;
