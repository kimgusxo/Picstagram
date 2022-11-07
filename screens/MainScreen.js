import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';

function MainScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderMain style={styles.headerMain} />
      <PostComponent style={styles.postComponent} />
      <FooterMain style={styles.footerMain} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerMain: {
    height: 56,
  },
  postComponent: {
    height: 475,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
  footerMain: {
    height: 56,
    marginTop: 53,
  },
});

export default MainScreen;
