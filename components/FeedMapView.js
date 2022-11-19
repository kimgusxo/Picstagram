import React, { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function FeedMapView(props) {
  const [isMapReady, setIsMapReady] = useState(false);
  const [region, setRegion] = useState({});

  const sampleRegion = {
    latitude: 36.145767,
    longitude: 128.39241,
    latitudeDelta: 0.0025,
    longitudeDelta: 0.0025,
  };

  useEffect(() => {
    setRegion(sampleRegion);
  }, []);

  const onMapLayout = () => {
    setIsMapReady(true);
  };

  return (
    <MapView
      userInterfaceStyle={'dark'}
      showMyLocationButton={true}
      region={region}
      onLayout={onMapLayout}
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
      {isMapReady && (
        <Marker
          title="New title"
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      )}
    </MapView>
  );
}

export default FeedMapView;
