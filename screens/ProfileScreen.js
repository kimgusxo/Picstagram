import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfomation from '../components/ProfileInfomation';
import FooterMain from '../components/FooterMain';
import FastImage from 'react-native-fast-image';
import { firebase } from '@react-native-firebase/auth';
import { ActivityIndicator } from '@react-native-material/core';
import {
  findMyPostById,
  findOnePostById,
  findOnePostByPostDate,
  findPostById,
  findPostList,
  readComments,
  readImages,
} from '../api/PostApi';
import { findMyInfoByEmail } from '../api/UserApi';

// const dataList = [
//   { key: '1', source: require('../assets/images/aimyon.jpg') },
//   { key: '2', source: require('../assets/images/aimyon1.jpg') },
//   { key: '3', source: require('../assets/images/aimyon2.jpg') },
//   { key: '4', source: require('../assets/images/aimyon3.jpg') },
//   { key: '5', source: require('../assets/images/aimyon4.jpg') },
//   { key: '6', source: require('../assets/images/aimyon5.jpg') },
//   { key: '7', source: require('../assets/images/aimyon6.jpg') },
//   { key: '8', source: require('../assets/images/aimyon7.jpg') },
//   { key: '9', source: require('../assets/images/aimyon8.jpg') },
//   { key: '10', source: require('../assets/images/aimyon9.jpg') },
//   { key: '11', source: require('../assets/images/aimyon10.jpg') },
// ];
const ITEM_MARGIN = 4;
const numColumns = 3;
const DEVICE_WIDTH = Dimensions.get('window').width;

function ProfileScreen({ navigation, route }) {
  const [dataList, setDataList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const id = React.useRef('');

  useEffect(() => {
    id.current = route.params.userInfo.id;
    setIsLoading(true);
    let isMyPost = false;

    async function getIsMyPost() {
      // Get userToken
      const userToken = firebase.auth().currentUser;

      // Set user information by userToken
      const userInfo = await findMyInfoByEmail(userToken.email);

      if (id.current == userInfo.id) isMyPost = true;
    }

    async function getMyPost(id) {
      const temp = [];
      (await findMyPostById(id)).forEach((post) => {
        temp.push(post.data());
      });

      const result = [];
      for (let index of temp) {
        const imageList = await readImages(index.date);
        //const comments = await readComments(index.date);
        result.push({
          key: imageList.url ?? index.title,
          title: index.title,
          date: index.date,
          source: imageList.length > 0 ? imageList[0].url : '',
        });
      }

      setDataList(result);
      setIsLoading(false);
    }

    async function getPost(id) {
      const temp = [];
      (await findMyPostById(id)).forEach((post) => {
        if (post.data().range != 'Private') temp.push(post.data());
      });

      const result = [];
      for (let index of temp) {
        const imageList = await readImages(index.date);
        //const comments = await readComments(index.date);
        result.push({
          key: imageList.url ?? index.title,
          title: index.title,
          date: index.date,
          source: imageList.length > 0 ? imageList[0].url : '',
        });
      }

      setDataList(result);
      setIsLoading(false);
    }
    getIsMyPost().then(() => {
      console.log('dd', isMyPost);
      isMyPost ? getMyPost(id.current) : getPost(id.current);
    });
  }, [id.current]);

  // Flatlist formatting
  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ key: 'blank', empty: true });
      totalLastRow++;
    }
    return dataList;
  };

  // Flatlint Rendering
  const _renderItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={[styles.item, styles.blankItem]} />;
    }

    let colorCode = '#' + Math.round(Math.random() * 0xffffff).toString(16);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={async () => {
          return findOnePostByPostDate(item.date).then((post) => {
            navigation.navigate('DetailPost', {
              post: post[0],
              userInfo: route.params.userInfo,
            });
          });
        }}
      >
        {item.source == [] ? (
          <View
            style={{
              width: DEVICE_WIDTH / numColumns,
              height: DEVICE_WIDTH / numColumns,
              padding: 16,
              backgroundColor: colorCode,
            }}
          >
            <Text style={{ fontSize: 32, color: 'white' }}>{item.title}</Text>
          </View>
        ) : (
          <FastImage
            style={{ width: DEVICE_WIDTH / numColumns, height: DEVICE_WIDTH / numColumns }}
            source={{ uri: item.source }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View>
            <StatusBar hidden />
            <ProfileHeader
              style={styles.profileHeader}
              navigation={navigation}
              userId={route.params.userInfo.id}
            />
            <ProfileInfomation style={styles.profileInfomation} navigation={navigation} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <FlatList
              data={formatData(dataList, numColumns)}
              style={{ width: DEVICE_WIDTH, margin: ITEM_MARGIN }}
              renderItem={_renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
            />
          </View>

          <FooterMain style={styles.footerMain} navigation={navigation} />
        </>
      )}
    </>
  );
}

const Loading = () => {
  return (
    <>
      <View>
        <StatusBar hidden />
        <ProfileHeader style={styles.profileHeader} />
        <ProfileInfomation style={styles.profileInfomation} />
      </View>
      <View
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={60} color={'#3F51B5'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: DEVICE_WIDTH / numColumns - ITEM_MARGIN * 3,
    height: DEVICE_WIDTH / numColumns - ITEM_MARGIN * 3,

    flex: 1,
  },
  blankItem: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  profileHeader: {
    height: 56,
  },
  scrollArea: {
    height: 380,
    backgroundColor: 'rgba(230, 230, 230,1)',
    marginTop: 148,
  },
  scrollArea_contentContainerStyle: {
    height: 380,
  },
  profileInfomation: {
    height: 148,
    backgroundColor: 'white',
  },
  footerMain: {
    height: 56,
  },
});

export default ProfileScreen;
