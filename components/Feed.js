import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

function Feed(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.txtPostTitle}>Lorem Ipsum </Text>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/images/aimyon.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imgContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    widht: '100%',
    height: 328,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  txtPostTitle: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginVertical: 10,
    marginHorizontal: 16,
  },
});

export default Feed;
