import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import NewPosting from '../components/NewPosting';
import OldPosting from '../components/OldPosting';
import HeaderMain from '../components/HeaderMain';
import UpdatePostingFooter from '../components/UpdatePostingFooter';

function RegisteryPostScreen(props) {
  return (
    <>
      <View>
        <StatusBar hidden />
        <HeaderMain style={styles.headerMain} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        <NewPosting style={styles.newPosting} />
        <OldPosting style={styles.oldPosting} />
        <OldPosting style={styles.oldPosting} />
        <OldPosting style={styles.oldPosting} />
        <OldPosting style={styles.oldPosting} />
        <OldPosting style={styles.oldPosting} />
        <OldPosting style={styles.oldPosting} />
      </ScrollView>
      <View>
        <UpdatePostingFooter style={styles.cancelableFooter} />
      </View>
    </>
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
    alignSelf: 'center',
  },
  newPosting: {
    height: 167,
    width: 341,
    marginTop: 18,
  },
  oldPosting: {
    height: 168,
    width: 341,
    marginTop: 18,
  },
  headerMain: {
    height: 56,
    alignSelf: 'center',
  },
  cancelableFooter: {
    height: 56,
  },
});

export default RegisteryPostScreen;
