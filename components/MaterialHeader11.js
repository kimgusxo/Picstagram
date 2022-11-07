import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function MaterialHeader11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Title
        </Text>
      </View>
      <Icon name="cross" style={styles.icon} />
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
  textWrapper: {
    marginLeft: 26,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    marginLeft: 247,
    marginTop: 12,
  },
});

export default MaterialHeader11;
