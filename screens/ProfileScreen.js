import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfomation from '../components/ProfileInfomation';
import FooterMain from '../components/FooterMain';

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.profileHeaderColumn}>
        <ProfileHeader style={styles.profileHeader} />
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          />
        </View>
        <ProfileInfomation style={styles.profileInfomation} />
      </View>
      <View style={styles.profileHeaderColumnFiller} />
      <FooterMain style={styles.footerMain} />
    </View>
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
    marginTop: -528,
  },
  profileHeaderColumn: {},
  profileHeaderColumnFiller: {
    flex: 1,
  },
  footerMain: {
    height: 56,
  },
});

export default ProfileScreen;
