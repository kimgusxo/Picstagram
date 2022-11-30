import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import NickNameScreen from './screens/NickNameScreen';
import FollowListScreen from './screens/FollowListScreen';
import MainScreen from './screens/MainScreen';
import PostingScreen from './screens/PostingScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisteryPostScreen from './screens/RegisteryPostScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import UserSearchScreen from './screens/UserSearchScreen';
import PostSearchScreen from './screens/PostSearchScreen';
import DetailPostScreen from './screens/DetailPostScreen';
import DetailPictureScreen from './screens/DetailPictureScreen';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import UserApi, { authUser } from './api/UserApi';

function App() {
  const Stack = createStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn(); //구글 로그인 및 유저 토큰 가져오기
    const googleCredential = auth.GoogleAuthProvider.credential(idToken); // idToken을 이용한 google credential 생성
    return auth().signInWithCredential(googleCredential); //생성된 credential을 사용하여 앱 로그인
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '241043291018-5s7tnpolhpghc20psd546s64abmegka3.apps.googleusercontent.com',
    });
  }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return !loggedIn ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={'Login'}
          children={({ navigation }) => (
            <LoginScreen onGoogleButtonPress={onGoogleButtonPress} navigation={navigation} />
          )}
        />
        <Stack.Screen name="NickName" component={NickNameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="DetailPost" component={DetailPostScreen} />
        <Stack.Screen name="DetailPicture" component={DetailPictureScreen} />
        <Stack.Screen name="FollowList" component={FollowListScreen} />
        <Stack.Screen name="Posting" component={PostingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RegisteryPost" component={RegisteryPostScreen} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
        <Stack.Screen name="UserSearch" component={UserSearchScreen} />
        <Stack.Screen name="PostSearch" component={PostSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
