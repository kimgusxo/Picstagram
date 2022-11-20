import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Platform, View, Image, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

function FeedMapView(props) {
  // State & Ref
  const [isMapReady, setIsMapReady] = useState(false);
  const [region, setRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef();

  // Variable
  const sampleMarkers = [
    { key: '0', identifier: '0', coordinate: { latitude: 36.145667, longitude: 128.39141 } },
    { key: '1', identifier: '1', coordinate: { latitude: 36.145767, longitude: 128.39241 } },
    { key: '2', identifier: '2', coordinate: { latitude: 36.145867, longitude: 128.39341 } },
  ];

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

  // Hooks
  useEffect(() => {
    setRegion(getInitialRegion(sampleMarkers));
    setMarkers(sampleMarkers);
  }, []);

  // Methods
  const getInitialRegion = (markers) => {
    let size = Object.keys(markers).length;
    let sumOfLatitude = 0,
      sumOfLongitude = 0;

    markers.forEach((marker) => {
      sumOfLatitude += marker.coordinate.latitude;
      sumOfLongitude += marker.coordinate.longitude;
    });

    let latitude = sumOfLatitude / size;
    let longitude = sumOfLongitude / size;

    return {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
  };

  const onMapLayout = () => {
    setIsMapReady(true);
    fitAllMarksers();
  };

  const fitAllMarksers = () => {
    mapRef.current.fitToSuppliedMarkers(markers.map(({ key }) => key));
  };

  // Return
  return (
    <MapView
      ref={mapRef}
      userInterfaceStyle={'dark'}
      region={region}
      onLayout={onMapLayout}
      onMapLoaded={fitAllMarksers}
      loadingEnabled={true}
      style={{
        width: Dimensions.get('window').width,
        height: 368,
        minHeight: 368,
        display: props.isConvertedMap ? 'flex' : 'none',
        elevation: Platform.os === 'android' ? 50 : 0,
        zIndex: -1,
      }}
    >
      {isMapReady &&
        markers.map((marker, index) => (
          <Marker
            key={marker.key}
            identifier={marker.identifier}
            title={'Test Marker'}
            coordinate={marker.coordinate}
          >
            <View style={styles.markerImgContainer}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                }}
                source={sampleImagePathList[index].source}
              />
            </View>
          </Marker>
        ))}
      {isMapReady && (
        <Polyline
          coordinates={markers.map((marker) => marker.coordinate)}
          strokeColor="rgba(0,0,222,0.33)"
          strokeWidth={8}
        />
      )}
    </MapView>
  );
}

export default FeedMapView;

const styles = StyleSheet.create({
  markerImgContainer: {
    width: 88,
    height: 88,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,100,0.66)',
  },
});
