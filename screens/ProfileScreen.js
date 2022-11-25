import React from 'react';
import { StyleSheet, View, StatusBar, FlatList, Dimensions } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfomation from '../components/ProfileInfomation';
import FooterMain from '../components/FooterMain';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const dataList = [
  { key: '1', source: require('../assets/images/aimyon.jpg') },
  { key: '2', source: require('../assets/images/aimyon1.jpg') },
  { key: '3', source: require('../assets/images/aimyon2.jpg') },
  { key: '4', source: require('../assets/images/aimyon3.jpg') },
  { key: '5', source: require('../assets/images/aimyon4.jpg') },
  { key: '6', source: require('../assets/images/aimyon5.jpg') },
  { key: '7', source: require('../assets/images/aimyon6.jpg') },
  { key: '8', source: require('../assets/images/aimyon7.jpg') },
  { key: '9', source: require('../assets/images/aimyon8.jpg') },
  { key: '10', source: require('../assets/images/aimyon9.jpg') },
  { key: '11', source: require('../assets/images/aimyon10.jpg') },
];
const ITEM_MARGIN = 4;
const numColumns = 3;
const DEVICE_WIDTH = Dimensions.get('window').width;

function ProfileScreen({ navigation, route }) {
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

    return (
      <TouchableOpacity style={styles.item}>
        <FastImage
          style={{ width: DEVICE_WIDTH / numColumns, height: DEVICE_WIDTH / numColumns }}
          source={item.source}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View>
        <StatusBar hidden />
        <ProfileHeader style={styles.profileHeader} navigation={navigation} />
        <ProfileInfomation style={styles.profileInfomation} navigation={navigation} />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <FlatList
          data={formatData(dataList, numColumns)}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>

      <FooterMain style={styles.footerMain} navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: DEVICE_WIDTH / numColumns - ITEM_MARGIN * 3,
    height: DEVICE_WIDTH / numColumns - ITEM_MARGIN * 3,
    margin: ITEM_MARGIN,

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
