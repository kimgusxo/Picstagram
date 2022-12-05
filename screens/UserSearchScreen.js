import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import UserSmallProfile from '../components/UserSmallProfile';
import SearchTab from '../components/SearchTab';
import { findUserById } from '../api/UserApi';

function UserSearchScreen({ navigation, route }) {
  const [text, setText] = useState('');
  const [user, setUser] = useState({});

  const search = async () => {
    const info = await findUserById(text);
    setUser(info);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SearchTab
        style={styles.searchTab}
        navigation={navigation}
        setText={setText}
        search={search}
      />

      <ScrollView contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        {user[0] != undefined ? (
          <UserSmallProfile
            style={styles.userSmallProfile}
            user={user[0]}
            navigation={navigation}
          />
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea_contentContainerStyle: {
    paddingVertical: 15,
  },
  userSmallProfile: {
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
  },
  searchTab: {
    height: 56,
  },
});

export default UserSearchScreen;
