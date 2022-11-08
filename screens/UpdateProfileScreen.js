import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import FooterMain from '../components/FooterMain';
import HeaderLogo from '../components/HeaderLogo';
import InputUserInfo from '../components/InputUserInfo';
import ProfileHeader from '../components/ProfileHeader';

function UpdateProfileScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ProfileHeader style={styles.headerLogo} navigation={navigation} />
      <Text style={styles.txtChangeProfile}>프로필 수정</Text>
      <InputUserInfo style={styles.inputUserInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerMain: {
    height: 56,

  },
  headerLogo: {
    height: 56,
  },
  txtChangeProfile: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    width: 210,
    height: 54,
    marginTop: 50,
    alignSelf: 'center',
  },
  inputUserInfo: {
    width: 329,
    height: 161,
    marginTop: 60,
    alignSelf: 'center',
  },
});

export default UpdateProfileScreen;
