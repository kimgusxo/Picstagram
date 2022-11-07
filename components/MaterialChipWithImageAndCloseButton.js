import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MaterialChipWithImageAndCloseButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require('../assets/images/cardImage6.png')}
        style={styles.leftImage}
      />
      <Text style={styles.chipText}>Example Chip</Text>
      <Icon name="close-circle" style={styles.iconStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(230,230,230)',
    borderRadius: 50,
    flexDirection: 'row',
  },
  leftImage: {
    height: 48,
    width: 56,
    backgroundColor: '#CCC',
    borderRadius: 16,
  },
  chipText: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.87)',
    paddingLeft: 4,
    paddingRight: 4,
  },
  iconStyle: {
    color: '#9E9E9E',
    fontSize: 24,
    marginRight: 4,
  },
});

export default MaterialChipWithImageAndCloseButton;
