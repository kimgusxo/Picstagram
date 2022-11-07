import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

function MainPost(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardItem1Style}>
        <View style={styles.headerStyle}>
          <Image
            source={require('../assets/images/cardImage4.png')}
            style={styles.leftImage}
          />
          <View style={styles.headerContent}>
            <Text style={styles.id}>id</Text>
          </View>
        </View>
      </View>
      <Image
        source={require('../assets/images/cardImage5.png')}
        resizeMode="cover"
        style={styles.cardItemImagePlace}
      />
      <View style={styles.body} />
      <View style={styles.actionBody} />
      <View style={styles.iconStackStack}>
        <View style={styles.iconStack}>
          <EvilIconsIcon name="heart" style={styles.icon} />
          <View style={styles.rect} />
        </View>
        <EvilIconsIcon name="comment" style={styles.icon2} />
        <Text style={styles.loremIpsum}>0</Text>
        <Text style={styles.loremIpsum1}>0</Text>
      </View>
      <View style={styles.postTitleStack}>
        <Text style={styles.postTitle}>post title</Text>
        <View style={styles.rect2} />
      </View>
      <EntypoIcon name="dots-three-horizontal" style={styles.icon3} />
      <FeatherIcon name="lock" style={styles.icon4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#CCC',
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: 'hidden',
  },
  cardItem1Style: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 49,
    left: -1,
    width: 357,
    top: 9,
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImage: {
    height: 40,
    width: 40,
    backgroundColor: '#CCC',
    borderRadius: 20,
  },
  headerContent: {
    paddingLeft: 16,
    justifyContent: 'center',
  },
  id: {
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
  },
  cardItemImagePlace: {
    backgroundColor: '#ccc',
    flex: 1,
    minHeight: 210,
    left: -1,
    width: 357,
    top: 40,
    height: 235,
  },
  body: {
    padding: 16,
    left: -1,
    width: 357,
    top: 244,
    height: 46,
  },
  actionBody: {
    padding: 8,
    flexDirection: 'row',
    left: -1,
    width: 357,
    top: 285,
    height: 42,
  },
  icon: {
    top: 1,
    left: 8,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    width: 40,
    height: 43,
  },
  rect: {
    top: 0,
    left: 0,
    width: 359,
    height: 50,
    position: 'absolute',
  },
  iconStack: {
    top: 0,
    left: 0,
    width: 359,
    height: 50,
    position: 'absolute',
  },
  icon2: {
    top: 1,
    left: 77,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    width: 40,
    height: 43,
  },
  loremIpsum: {
    top: 7,
    left: 48,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 24,
    width: 13,
    height: 30,
  },
  loremIpsum1: {
    top: 7,
    left: 117,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 24,
    width: 13,
    height: 30,
  },
  iconStackStack: {
    top: 350,
    left: 0,
    width: 359,
    height: 50,
    position: 'absolute',
  },
  postTitle: {
    top: 4,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    width: 318,
    height: 29,
    left: 18,
  },
  rect2: {
    top: 0,
    left: 0,
    width: 357,
    height: 33,
    position: 'absolute',
  },
  postTitleStack: {
    top: 56,
    left: 0,
    width: 357,
    height: 33,
    position: 'absolute',
  },
  icon3: {
    top: 12,
    left: 301,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    width: 40,
    height: 43,
  },
  icon4: {
    top: 9,
    left: 247,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40,
    width: 40,
    height: 40,
  },
});

export default MainPost;
