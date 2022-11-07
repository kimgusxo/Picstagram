import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function CancelButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log('Navigate to Go Back')}
        style={styles.button}>
        <Icon name="x" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  icon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 23,
    height: 23,
    width: 23,
    marginTop: 4,
    marginLeft: 3,
  },
});

export default CancelButton;
