import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import PostComponent from '../components/PostComponent';
import FooterMain from '../components/FooterMain';

function MainScreen({navigation, route}) {
  return (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} navigation={navigation}/>
      </View>
      <ScrollView style={styles.container}>
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
        <PostComponent style={styles.postComponent} navigation={navigation} />
      </ScrollView>
      <View>
        <FooterMain style={styles.footerMain} navigation={navigation} />
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
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(155,155,155,0.5)',
  },
  footerMain: {
    height: 56,
  },
});

export default MainScreen;

