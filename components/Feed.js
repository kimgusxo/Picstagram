import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeedMapView from './FeedMapView';

const sampleImagePathList = [
  {
    source: require('../assets/images/aimyon.jpg'),
  },
  {
    source: require('../assets/images/aimyon1.jpg'),
  },
  {
    source: require('../assets/images/aimyon2.jpg'),
  },
];

function Feed(props) {
  // props
  const isDetailed = props.isDetailed;

  // state & ref
  const [imagePathList, setImagePathList] = useState([]);
  const [index, setIndex] = useState(0);
  const [isConvertedMap, setIsConvertedMap] = useState(false);
  const carouselRef = useRef(null);

  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = Dimensions.get('window').width;

  useEffect(() => {
    setImagePathList(sampleImagePathList);
  }, []);

  const toggleMapToImg = () => {
    setIsConvertedMap(!isConvertedMap);
  };

  // eslint-disable-next-line no-unused-vars
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          !isDetailed
            ? props.navigation.navigate('DetailPost')
            : props.navigation.navigate('DetailPicture')
        }
        style={{ alignItems: 'center' }}
      >
        {/* Carousel Image */}
        <Image
          style={{
            width: 368,
            height: 368,
            resizeMode: 'cover',
            display: isConvertedMap ? 'none' : 'flex',
          }}
          source={item.source}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.txtPostTitle}>
        Aimyon Daisuki~!😍😍😍 {'\n\n'}#Japan #Singer-song Writer
      </Text>
      <View style={styles.imgContainer}>
        {/* ConvertBtn */}
        {isDetailed ? (
          <TouchableOpacity style={styles.convertBtn} onPress={toggleMapToImg}>
            <EntypoIcon name="map" style={styles.mapIcon} />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {/* CarouselImg */}
        <Carousel
          ref={carouselRef}
          data={imagePathList}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => setIndex(index)}
          layout={'default'}
        />

        {/* Map */}
        {isDetailed ? (
          <FeedMapView isConvertedMap={isConvertedMap} navigation={props.navigation} />
        ) : (
          <></>
        )}
      </View>

      {/* Pagination */}
      <View style={styles.pagingContainer}>
        <Pagination
          dotsLength={imagePathList.length}
          activeDotIndex={index}
          carouselRef={carouselRef}
          dotStyle={{
            width: 15,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>

      {/* Post Content */}
      {isDetailed ? (
        <Text style={styles.txtContent}>
          Aimyon is my favorite Japanese Singer~~!!! {'\n'}
          She is famous Singer-song writer in japan~! {'\n'}
          Do u know her song? {'\n'}
          My favorite song of hers is Marigold ❤❤
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imgContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagingContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: -65,
  },
  image: {
    widht: '100%',
    height: 328,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  txtPostTitle: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  txtContent: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 16,
    lineHeight: 24,
  },
  convertBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    elevation: Platform.os === 'android' ? 50 : 0,
    zIndex: 10,
  },
  mapIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    position: 'relative',
  },
});

export default Feed;
