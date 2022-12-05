import React, { Component, useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PostApi, { findPostByTitle, readImages, updatePost } from '../api/PostApi';
import ImageCropPicker from 'react-native-image-crop-picker';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const IMAGE_WIDTH = 100;
const ENABLED_SCROLL_WIDTH = Dimensions.get('window').width - IMAGE_WIDTH;

function PostingUpdateScreen({ navigation, props, route }) {
  //Multiple-image 선택
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [isScrollable, setIsScrollable] = useState(true);
  const [postDate, setPostDate] = useState('');
  // const { inputdata } = props;

  useEffect(() => {
    beforePostData();
  }, []);

  const beforePostData = async () => {
    setImages(route.params.images);
    setPostDate(route.params.date);
    setForm({ title: route.params.title, content: route.params.content });
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri: item.url,
          }}
          style={styles.media}
        />
      </View>
    );
  };

  const update = async () => {
    //2. updateP 호출
    await updatePost(postDate, form.title, form.content);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headercontainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Main')}>
          <EntypoIcon name="cross" style={styles.cancelIcon} />
        </TouchableOpacity>
        <View style={styles.cancelButtonFiller} />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            update();
            navigation.navigate('Main');
          }}
        >
          <MaterialCommunityIconsIcon name="arrow-right" style={styles.nextIcon} />
        </TouchableOpacity>
      </View>

      <View style={[styles.titleWriteContainer]}>
        <TextInput
          defaultValue={form.title}
          placeholder="제목을 입력하세요."
          style={styles.titleinputStyle}
          onChangeText={(value) => {
            setForm({ ...form, title: value });
          }}
        />
      </View>
      <View style={[styles.contentsWritecontainer]}>
        <TextInput
          defaultValue={form.content}
          multiline
          returnKeyType="next"
          placeholder="내용을 입력하세요."
          textAlignVertical="top"
          style={styles.contentinputStyle}
          onChangeText={(value) => {
            setForm({ ...form, content: value });
          }}
        />
      </View>

      <View style={styles.addImageStack}>
        <TouchableWithoutFeedback>
          <FlatList
            style={styles.container}
            data={images}
            renderItem={renderItem}
            horizontal={true}
            scrollEnabled={isScrollable}
          />
        </TouchableWithoutFeedback>
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
    flex: 3,
  },
  headercontainer: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  titleWrite: {
    width: width,
  },
  addImageStack: {
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
  cancelButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5,
  },
  cancelIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  cancelButtonFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    padding: 11,
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  nextIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  titleWriteContainer: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  titleinputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'stretch',
    flex: 1,
    lineHeight: 16,
  },
  contentsWritecontainer: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    padding: 10,
  },
  contentinputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default PostingUpdateScreen;
