import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import SubmitButton from '../components/SubmitButton';
import auth from '@react-native-firebase/auth';
import UserApi, { duplicationId, createUser } from '../api/UserApi';

function UpdateProfileScreen({ navigation, route }) {
  const [id, setId] = useState('');

  const duplicationCheck = async () => {
    console.log(id);
    console.log(auth().currentUser.email);
    if ((await duplicationId(id)) == false) {
      getAlertNicknamePossible();
    } else getAlertNicknmaeImpossible();
  };

  const registerUser = async () => {
    if ((await duplicationId(id)) == false) {
      await createUser([id, auth().currentUser.email]);
    } else getAlertNicknmaeImpossible();
  };

  const getAlertNicknamePossible = () => {
    Alert.alert('사용가능한 닉네임입니다.');
  };

  const getAlertNicknmaeImpossible = () => {
    Alert.alert('이미 등록된 닉네임입니다.');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderLogo style={styles.headerLogo} />
      <Text style={styles.NickName}>프로필 편집</Text>
      <View style={[styles.userInfocontainer]}>
        <View style={styles.idTextBoxRow}>
          <View style={[styles.idtextboxcontainer]}>
            <TextInput
              style={styles.idTextBox}
              inputStyle="Placeholder"
              inputStyle="Nickname1"
              onChangeText={(text) => setId(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.duplcontainer}
            onPress={() => {
              duplicationCheck();
            }}
          >
            <Text style={styles.중복확인}> 중복확인 </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SubmitButton
        style={styles.submitButton}
        registerUser={registerUser}
        navigation={navigation}
      />
      <View style={styles.logout}>
        <Button title="Logout" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLogo: {
    height: 56,
  },
  InputUserInfo: {
    height: 110,
    alignSelf: 'center',
  },
  NickName: {
    height: 120,
    marginTop: 100,
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 40,
    alignSelf: 'center',
  },
  submitButton: {
    width: 100,
    height: 36,
    marginTop: 120,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    alignSelf: 'center',
  },
  userInfocontainer: {},
  idTextBox: {
    height: 43,
    width: 218,
  },
  duplicateCheckButton: {
    height: 36,
    width: 100,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 7,
  },
  idTextBoxRow: {
    height: 43,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  duplcontainer: {
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  중복확인: {
    color: '#fff',
    fontSize: 14,
  },
  idtextboxcontainer: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  idinputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'stretch',
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  logout: {
    width: 100,
    height: 36,
    marginTop: 60,
    borderWidth: 0,
    borderColor: '#000000',
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default UpdateProfileScreen;
