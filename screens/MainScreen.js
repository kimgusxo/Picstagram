import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';

function MainScreen(props) {
  return (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} />
      </View>
      <ScrollView style={styles.container}>
        <PostComponent style={styles.postComponent} />

      </ScrollView>
      <View>
        <FooterMain style={styles.footerMain} />
      </View>
    </>
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
  },
});

export default MainScreen;
