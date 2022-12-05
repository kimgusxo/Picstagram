import React, { useEffect } from 'react';
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
import { ActivityIndicator } from '@react-native-material/core';
import { useIsFocused } from '@react-navigation/native';
import { findMyPostById, findOnePostByPostDate, readImages } from '../api/PostApi';

const ITEM_MARGIN = 4;
const numColumns = 3;
const DEVICE_WIDTH = Dimensions.get('window').width;

/**
 * @param {userInfo} 나의 유저 정보
 * @param {profileInfo} 프로필 조회를 위한 유저 정보
 * @param {isMyPost} bottomNav처럼 언제나 나의 프로필 열람인 것이 보장될 경우 사용
 */
function ProfileScreen({ navigation, route }) {
  const [dataList, setDataList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isFocused = useIsFocused();
  const id = React.useRef('');
  const isMyPost = React.useRef('');

  /**
   * depArr = isFocused
   * 화면이 포커싱 될 때 마다 데이터 Fetching
   * 성능 개선을 위해 이전 화면을 기억해 두었음
   */
  useEffect(() => {
    // Comparison prevUser with curUser
    // 일치 시, fetch 없이 return.
    if (id.current == route.params.profileInfo.id) return;

    id.current = route.params.profileInfo.id;

    setIsLoading(true);

    // isMyPost => getMyPost or getPost 분기에 사용됨
    route.params.isMyPost == true
      ? (isMyPost.current = true)
      : (isMyPost.current = route.params.userInfo.id == id.current);

    // getMyPost
    async function getMyPost(id) {
      const temp = [];
      (await findMyPostById(id)).forEach((post) => {
        temp.push(post.data());
      });

      const result = [];
      for (let index of temp) {
        const imageList = await readImages(index.date);
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

    // getPost
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

    isMyPost.current ? getMyPost(id.current) : getPost(id.current);
  }, [isFocused]);

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

    // 사진이 없는 포스트의 배경색상은 Random
    let colorCode = '#' + Math.round(Math.random() * 0xffffff).toString(16);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={async () => {
            // DetailPost로 navigate하면서 단일 Post의 전체 데이터를 Fetch합니다.
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
                width: DEVICE_WIDTH / numColumns - 2 * ITEM_MARGIN,
                height: DEVICE_WIDTH / numColumns - 2 * ITEM_MARGIN,
                backgroundColor: colorCode,
              }}
            >
              <Text style={{ fontSize: 32, color: 'white' }}>{item.title}</Text>
            </View>
          ) : (
            <FastImage
              style={{
                width: DEVICE_WIDTH / numColumns - 2 * ITEM_MARGIN,
                height: DEVICE_WIDTH / numColumns - 2 * ITEM_MARGIN,
              }}
              source={{ uri: item.source }}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return isLoading ? (
    <Loading profileId={route.params.profileInfo.id} />
  ) : (
    <>
      <View>
        <StatusBar hidden />
        <ProfileHeader
          style={styles.profileHeader}
          navigation={navigation}
          profileId={route.params.profileInfo.id}
        />
        <ProfileInfomation
          style={styles.profileInfomation}
          navigation={navigation}
          isMyPost={isMyPost.current}
        />
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
  );
}

const Loading = (props) => {
  return (
    <>
      <View>
        <StatusBar hidden />
        <ProfileHeader style={styles.profileHeader} profileId={props.profileId} />
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
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    marginVertical: ITEM_MARGIN,
  },
  blankItem: {
    backgroundColor: 'transparent',
  },
  profileHeader: {
    height: 56,
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
