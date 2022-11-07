import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

function Feed(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require('../assets/images/8d16082f2cc863447eeec12f1c3af542.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.txtPostTitle}>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 328,
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop: 40,
  },
  txtPostTitle: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: -356,
    marginLeft: 7,
  },
});

export default Feed;
