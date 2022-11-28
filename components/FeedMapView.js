import React, { useEffect, useRef, useCallback, useState, memo } from 'react';
import { Dimensions, Platform, View, Image, StyleSheet, Text } from 'react-native';
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import { Clusterer } from 'react-native-clusterer';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FeedMapView(props) {
  // State & Ref
  const [isMapReady, setIsMapReady] = useState(false);
  const [initialRegion, setInitialRegion] = useState({});
  const [region, setRegion] = useState({});
  const mapRef = useRef();

  // Variable
  const MAP_DIMENSIONS = { width: Dimensions.get('window').width, height: 368 };

  const placesMarkers = [
    {
      type: 'Feature',
      properties: {
        id: 0,
        identifier: '0',
        source: require('../assets/images/aimyon.jpg'),
      },
      geometry: { type: 'Point', coordinates: [128.39141, 36.145667] },
    },
    {
      type: 'Feature',
      properties: {
        id: 1,
        identifier: '1',
        source: require('../assets/images/aimyon1.jpg'),
      },
      geometry: { type: 'Point', coordinates: [128.39241, 36.145767] },
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
        identifier: '2',
        source: require('../assets/images/aimyon2.jpg'),
      },
      geometry: { type: 'Point', coordinates: [128.39341, 36.145867] },
    },
  ];

  // Hooks
  useEffect(() => {
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
    <MapView
      ref={mapRef}
      userInterfaceStyle={'dark'}
      region={initialRegion}
      onLayout={onMapLayout}
      onMapLoaded={fitAllMarksers}
      loadingEnabled={true}
      onRegionChangeComplete={setRegion}
      style={{
        width: Dimensions.get('window').width,
        height: 368,
        minHeight: 368,
        display: props.isConvertedMap ? 'flex' : 'none',
        elevation: Platform.os === 'android' ? 50 : 0,
        zIndex: -1,
      }}
    >
      {isMapReady && (
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
              />
            );
          }}
        />
      )}
      {isMapReady && (
        <Polyline
          coordinates={placesMarkers.map((marker) => ({
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0],
          }))}
          strokeColor="rgba(0,0,222,0.33)"
          strokeWidth={8}
        />
      )}
    </MapView>
  );
}

export default FeedMapView;

export const Point = memo(
  ({ item, onPress, navigation }) => {
    return (
      <Marker
        key={item.properties?.cluster_id ?? `point-${item.properties?.id}`}
        coordinate={{
          latitude: item.geometry.coordinates[1],
          longitude: item.geometry.coordinates[0],
        }}
        tracksViewChanges={false}
        onPress={() => onPress(item)}
        onCalloutPress={() => navigation.navigate('DetailPicture')}
      >
        {item.properties?.cluster ? (
          // Render Cluster
          <View style={styles.clusterMarker}>
            <Text style={styles.clusterMarkerText}>{item.properties.point_count}</Text>
          </View>
        ) : (
          // Else, use default behavior to render
          // a marker and add a callout to it
          <>
            <View style={styles.markerImgContainer}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                }}
                source={item.properties.source}
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
    backgroundColor: 'rgba(0,0,100,0.66)',
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
