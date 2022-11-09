import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import CreatePostHeader from '../components/CreatePostHeader';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ContentsWrite from '../components/ContentsWrite';
import TitleWrite from '../components/TitleWrite';

const windowWidth = Dimensions.get("window").width;

function PostingScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <CreatePostHeader style={styles.createPostHeader} />
      <TitleWrite style={styles.titleWrite} />
      <ContentsWrite style={styles.contentsWrite} />
      <View style={styles.addImageStack}>
        <View style={styles.addImage}>
          <TouchableOpacity style={styles.addImageButton}>
            <FeatherIcon name="plus-square" style={styles.addImageIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.scrollArea}>
          <View style={styles.imageStack}>
            <Image
              source={require('../assets/images/Capture001.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createPostHeader: {
    height: 56,
    width : windowWidth,
  },
  scrollArea: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(155,155,155,1)',
  },
  addImage: {
    width: 100,
    height: 100,
  },
  addImageButton: {
    flex:1,
    width: 100,
    height: 100,
  },
  addImageIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 80,
    height: 80,
    width: 80,
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imageStack: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  contentsWrite: {
    paddingVertical: 210.8,
  },
  titleWrite: {
    width: windowWidth,
  },
  addImageStack: {
    flexDirection : 'row',
    width: windowWidth,
  },
});

export default PostingScreen;
