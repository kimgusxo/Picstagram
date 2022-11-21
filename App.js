import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FollowListScreen from './screens/FollowListScreen';
import MainScreen from './screens/MainScreen';
import PostingScreen from './screens/PostingScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisteryPostScreen from './screens/RegisteryPostScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import UserSearchScreen from './screens/UserSearchScreen';
import PostSearchScreen from './screens/PostSearchScreen';
import DetailPostScreen from './screens/DetailPostScreen';

function App() {
  const Stack = createStackNavigator();

  const isLogined = true;

  return !isLogined ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="DetailPost" component={DetailPostScreen} />
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
