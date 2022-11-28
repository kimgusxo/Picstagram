import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import CreatePostHeader from '../components/CreatePostHeader';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ContentsWrite from '../components/ContentsWrite';
import TitleWrite from '../components/TitleWrite';

const width = Dimensions.get('window').width;
const IMAGE_WIDTH = 100;

function PostingScreen({ navigation }) {
  //Multiple-image 선택
  const [images, setImages] = useState([]);

  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        usedCameraButton: false,
        maxVideo: 1,
        isExportThumbnail: true,
        isCrop: true,
        isCropCircle: true,
      });

      console.log('response: ', response);
      setImages(response);
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  const onDelete = (value) => {
    const data = images.filter(
      (item) => item?.localIdentifier && item?.localIdentifier !== value?.localIdentifier,
    );
    setImages(data);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri: 'file://' + item.realPath,
          }}
          style={styles.media}
        />
        <TouchableOpacity
          onPress={() => onDelete(item)}
          activeOpacity={0.9}
          style={styles.buttonDelete}
        >
          <Text style={styles.titleDelete}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <CreatePostHeader style={styles.createPostHeader} navigation={navigation} />
      <TitleWrite style={styles.titleWrite} />
      <ContentsWrite style={styles.contentsWrite} />
      <View style={styles.addImageStack}>
        <View style={styles.addImage}>
          <TouchableOpacity style={styles.addImageButton} onPress={openPicker}>
            <FeatherIcon name="plus-square" style={styles.addImageIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.container}
          data={images}
          keyExtractor={(item, index) => (item?.filename ?? item?.path) + index}
          renderItem={renderItem}
          horizontal={true}
        />
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
    width: width,
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
    flex: 1,
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
    width: width,
  },
  addImageStack: {
    flex: 1,
    flexDirection: 'row',
    width: width,
  },
  buttonDelete: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  titleDelete: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default PostingScreen;
