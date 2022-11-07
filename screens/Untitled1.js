import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Untitled1;
