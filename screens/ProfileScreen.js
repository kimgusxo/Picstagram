import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfomation from '../components/ProfileInfomation';
import FooterMain from '../components/FooterMain';

function ProfileScreen(props) {
  return (
    <>
      <View>
        <StatusBar hidden />
        <ProfileHeader style={styles.profileHeader} />
        <ProfileInfomation style={styles.profileInfomation} />
        <View style={styles.profileHeaderColumnFiller} />
      </View>
      <ScrollView style={styles.container} />
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
  profileHeader: {
    height: 56,
  },
  scrollArea: {
    height: 380,
    backgroundColor: 'rgba(230, 230, 230,1)',
    marginTop: 148,
  },
  scrollArea_contentContainerStyle: {
    height: 380,
  },
  profileInfomation: {
    height: 148,
    backgroundColor: 'white',
  },
  profileHeaderColumnFiller: {
    flex: 1,
  },
  footerMain: {
    height: 56,
  },
});

export default ProfileScreen;
