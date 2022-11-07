import React, {useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';
import FirstScreen from './src/screens/FirstScreen';
import FollowListScreen from './src/screens/FollowListScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import PostingScreen from './src/screens/PostingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisteryPostScreen from './src/screens/RegisteryPostScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Untitled from './src/screens/Untitled';
import Untitled1 from './src/screens/Untitled1';
import Untitled2 from './src/screens/Untitled2';
import UpdateProfileScreen from './src/screens/UpdateProfileScreen';
import UserSearchScreen from './src/screens/UserSearchScreen';

const DrawerNavigation = createDrawerNavigator({
  FirstScreen: FirstScreen,
  FollowListScreen: FollowListScreen,
  LoginScreen: LoginScreen,
  MainScreen: MainScreen,
  PostingScreen: PostingScreen,
  ProfileScreen: ProfileScreen,
  RegisteryPostScreen: RegisteryPostScreen,
  SearchScreen: SearchScreen,
  SignUpScreen: SignUpScreen,
  Untitled: Untitled,
  Untitled1: Untitled1,
  Untitled2: Untitled2,
  UpdateProfileScreen: UpdateProfileScreen,
  UserSearchScreen: UserSearchScreen,
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    FirstScreen: FirstScreen,
    FollowListScreen: FollowListScreen,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
    PostingScreen: PostingScreen,
    ProfileScreen: ProfileScreen,
    RegisteryPostScreen: RegisteryPostScreen,
    SearchScreen: SearchScreen,
    SignUpScreen: SignUpScreen,
    Untitled: Untitled,
    Untitled1: Untitled1,
    Untitled2: Untitled2,
    UpdateProfileScreen: UpdateProfileScreen,
    UserSearchScreen: UserSearchScreen,
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-700': require('./src/assets/fonts/roboto-700.ttf'),
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
      'roboto-700italic': require('./src/assets/fonts/roboto-700italic.ttf'),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
