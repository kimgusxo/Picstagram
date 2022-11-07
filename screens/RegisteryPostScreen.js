import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import NewPosting from '../components/NewPosting';
import OldPosting from '../components/OldPosting';
import HeaderMain from '../components/HeaderMain';
import UpdatePostingFooter from '../components/UpdatePostingFooter';

function RegisteryPostScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <NewPosting style={styles.newPosting} />
          <OldPosting style={styles.oldPosting} />
          <OldPosting style={styles.oldPosting2} />
        </ScrollView>
      </View>
      <HeaderMain style={styles.headerMain} />
      <UpdatePostingFooter style={styles.cancelableFooter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea: {
    height: 528,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 56,
  },
  scrollArea_contentContainerStyle: {
    height: 528,
  },
  newPosting: {
    height: 167,
    width: 341,
    marginTop: 7,
    marginLeft: 9,
  },
  oldPosting: {
    height: 168,
    width: 341,
    marginTop: 6,
    marginLeft: 9,
  },
  oldPosting2: {
    width: 341,
    height: 168,
    marginTop: 6,
    marginLeft: 9,
  },
  headerMain: {
    height: 56,
    width: 360,
    marginTop: -584,
    alignSelf: 'center',
  },
  cancelableFooter: {
    height: 56,
    marginTop: 528,
  },
});

export default RegisteryPostScreen;
