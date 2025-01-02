import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import IdTextBox from './IdTextBox';
import DuplicationCheckButton from './DuplicationCheckButton';

function InputUserInfo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.idTextBoxRow}>
        <IdTextBox inputStyle="Placeholder" inputStyle="Nickname" style={styles.idTextBox} />
        <DuplicationCheckButton 중복확인="중복확인" style={styles.duplicateCheckButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default InputUserInfo;
