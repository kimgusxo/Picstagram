import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

function IdTextBox(props) {
  return (
    <View style={[styles.idtextboxcontainer, props.style]}>
      <TextInput placeholder={props.inputStyle || 'ID'} style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default IdTextBox;
