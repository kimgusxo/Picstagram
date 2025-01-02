
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import IdTextBox from './IdTextBox';
import PasswordTextBox from './PasswordTextBox';

function InputLoginInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <IdTextBox
        inputStyle="Placeholder"
        inputStyle="ID"
        style={styles.idTextBox}
      />
      <PasswordTextBox
        inputStyle="Placeholder"
        inputStyle="PW"
        style={styles.passwordTextBox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  idTextBox: {
    height: 55,
  },
  passwordTextBox: {
    height: 55,
  },
});

export default InputLoginInfo;