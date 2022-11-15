import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// 원래 위치
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
  const [imagePathList, setImagePathList] = useState([]);
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setImagePathList(sampleImagePathList);
  }, []);

  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = Dimensions.get('window').width;

  // eslint-disable-next-line no-unused-vars
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 368, height: 368, resizeMode: 'cover' }} source={item.source} />
      </View>
    );
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.txtPostTitle}>Aimyon Daisuki~!😍😍😍</Text>
      <View style={styles.imgContainer}>
        <Carousel
          ref={carouselRef}
          data={imagePathList}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => setIndex(index)}
          layout={'default'}
        />
      </View>
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
    marginVertical: 10,
    marginHorizontal: 16,
  },
});

export default Feed;
