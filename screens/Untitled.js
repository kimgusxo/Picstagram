import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CreatePostHeader from '../components/CreatePostHeader';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <CreatePostHeader style={styles.createPostHeader} />
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}>
            <View style={styles.addImage}>
              <TouchableOpacity style={styles.addImageButton}>
                <FeatherIcon name="plus-square" style={styles.addImageIcon} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.imageBox}>
          <View style={styles.imageStack}>
            <Image
              source={require('../assets/images/CeVrRv4FyTN1.jfif')}
              resizeMode="contain"
              style={styles.image}
            />
            <EntypoIcon
              name="circle-with-cross"
              style={styles.imageCancelIcon}
            />
          </View>
        </View>
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
  },
  scrollArea: {
    top: 20,
    left: 0,
    width: 360,
    height: 100,
    position: 'absolute',
    backgroundColor: 'rgba(155,155,155,1)',
  },
  scrollArea_contentContainerStyle: {
    width: 360,
    height: 100,
  },
  addImage: {
    width: 100,
    height: 100,
  },
  addImageButton: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  addImageIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 80,
    height: 80,
    width: 80,
    marginTop: 10,
    marginLeft: 10,
  },
  imageBox: {
    top: 0,
    left: 100,
    width: 120,
    height: 120,
    position: 'absolute',
  },
  image: {
    top: 20,
    left: 0,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  imageCancelIcon: {
    top: 0,
    left: 80,
    position: 'absolute',
    color: 'rgba(208,2,27,1)',
    fontSize: 40,
  },
  imageStack: {
    width: 120,
    height: 120,
  },
  scrollAreaStack: {
    width: 360,
    height: 120,
    marginTop: 464,
  },
});

export default Untitled;
