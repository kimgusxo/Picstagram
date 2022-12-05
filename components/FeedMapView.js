import React, { useEffect, useRef, useCallback, useState, memo } from 'react';
import { Dimensions, Platform, View, StyleSheet, Text, Image } from 'react-native';
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import { Clusterer } from 'react-native-clusterer';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FeedMapView(props) {
  // State & Ref
  const [isMapReady, setIsMapReady] = useState(false);
  const [initialRegion, setInitialRegion] = useState({});
  const [region, setRegion] = useState({});
  const mapRef = useRef();

  // Variable
  const MAP_DIMENSIONS = { width: Dimensions.get('window').width, height: 368 };

  // props로 전달받은 데이터를 placesMarker로 변환하는 메소드가 필요함
  const imgListToMarkers = () => {
    let result = props.post.imageList.map((image) => {
      return {
        type: 'Feature,',
        properties: {
          id: image.url,
          identifier: image.url,
          source: image.url,
        },
        geometry: {
          type: 'Point',
          coordinates: [Number(image.longitude), Number(image.latitude)],
        },
      };
    });
    return result;
  };
  //const placesMarkers = imgListToMarkers();

  // Hooks
  useEffect(() => {
    placesMarkers = imgListToMarkers();
    setInitialRegion(getInitialRegion(placesMarkers));
    setRegion(initialRegion);
  }, []);

  const _handlePointPress = useCallback(
    (point) => {
      if (point.properties?.getClusterExpansionRegion) {
        const toRegion = point.properties?.getClusterExpansionRegion();
        mapRef.current?.animateToRegion(toRegion, 500);
      }
    },
    [mapRef],
  );

  // Methods
  const getInitialRegion = (markers) => {
    //console.log(markers[0].geometry.coordinate);
    let size = markers.length;
    let sumOfLatitude = 0,
      sumOfLongitude = 0;

    markers.forEach((marker) => {
      sumOfLatitude += marker.geometry.coordinates[1];
      sumOfLongitude += marker.geometry.coordinates[0];
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
    mapRef.current.fitToSuppliedMarkers(placesMarkers.map(({ key }) => key));
  };

  // Return
  return (
    <>
      <MapView
        ref={mapRef}
        region={initialRegion}
        onLayout={onMapLayout}
        onMapLoaded={fitAllMarksers}
        loadingEnabled={true}
        onRegionChangeComplete={setRegion}
        zoomControlEnabled={true}
        style={{
          width: Dimensions.get('window').width,
          height: 368,
          minHeight: 368,
          display: props.isConvertedMap ? 'flex' : 'none',
          elevation: Platform.os === 'android' ? 50 : 0,
          zIndex: -1,
        }}
      >
        {isMapReady ? (
          <Clusterer
            data={placesMarkers}
            region={region}
            options={{ radius: 30, minPoints: 2 }}
            mapDimensions={MAP_DIMENSIONS}
            renderItem={(item) => {
              return (
                <Point
                  key={item.properties?.cluster_id ?? `point-${item.properties?.id}`}
                  item={item}
                  navigation={props.navigation}
                  onPress={_handlePointPress}
                  post={props.post}
                />
              );
            }}
          />
        ) : (
          <></>
        )}
        {isMapReady ? (
          <Polyline
            coordinates={placesMarkers.map((marker) => ({
              latitude: marker.geometry.coordinates[1],
              longitude: marker.geometry.coordinates[0],
            }))}
            strokeColor="rgba(0,0,222,0.33)"
            strokeWidth={8}
          />
        ) : (
          <></>
        )}
      </MapView>
    </>
  );
}

export default FeedMapView;

export const Point = memo(
  ({ item, onPress, navigation, post }) => {
    const [uri, setUri] = useState('');

    useEffect(() => {
      setUri(item.properties.source);
    }, [uri]);

    return (
      <Marker
        key={item.properties?.cluster_id ?? `point-${item.properties?.id}`}
        coordinate={{
          latitude: item.geometry.coordinates[1],
          longitude: item.geometry.coordinates[0],
        }}
        tracksViewChanges={false}
        onPress={() => onPress(item)}
        onCalloutPress={() => navigation.navigate('DetailPicture', post)}
      >
        {item.properties?.cluster ? (
          // Render Cluster
          <View style={styles.clusterMarker}>
            <Text style={styles.clusterMarkerText}>{item.properties.point_count}</Text>
          </View>
        ) : (
          // Else, use default behavior to render
          // a marker and add a callout to it
          // FastImage is not working on the map
          <>
            <View style={styles.markerImgContainer}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: 'cover',
                }}
                source={{ uri: uri }}
              />
            </View>
            <Callout>
              <Text>See more</Text>
            </Callout>
          </>
        )}
      </Marker>
    );
  },
  (prevProps, nextProps) =>
    prevProps.item.properties?.cluster_id === nextProps.item.properties?.cluster_id &&
    prevProps.item.properties?.id === nextProps.item.properties?.id &&
    prevProps.item.properties?.point_count === nextProps.item.properties?.point_count &&
    prevProps.item.properties?.onItemPress === nextProps.item.properties?.onItemPress &&
    prevProps.item.properties?.getClusterExpansionRegion ===
      nextProps.item.properties?.getClusterExpansionRegion,
);

const styles = StyleSheet.create({
  markerImgContainer: {
    width: 88,
    height: 88,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.66)',
  },
  calloutContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  clusterMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8eb3ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clusterMarkerText: {
    color: '#fff',
    fontSize: 16,
  },
});
