import React, { Component, useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';

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

function DetailPictureScreen({ navigation, route }) {
  const [imagePathList, setImagePathList] = useState([]);
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setImagePathList(sampleImagePathList);
  }, []);

  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = Dimensions.get('window').width;

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        {/* Carousel Image */}
        <FastImage
          style={{
            width: 368,
            height: 368,
          }}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: item.url }}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Carousel
            ref={carouselRef}
            data={route.params.post.imageList}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={(index) => setIndex(index)}
            autoplay={true}
            loop={true}
            autoplayDelay={0}
            autoplayInterval={5000}
            layout={'default'}
          />
        </View>
        <View style={styles.pagingContainer}>
          <Pagination
            dotsLength={route.params.post.imageList.length}
            activeDotIndex={index}
            carouselRef={carouselRef}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            tappableDots={true}
            inactiveDotOpacity={0.4}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  imgContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagingContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  image: {
    widht: '100%',
    height: 328,
    backgroundColor: 'rgba(0,0,0,1)',
  },
});

export default DetailPictureScreen;
