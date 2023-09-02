import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

const useMapController = setLocation => {
  const mapRef = useRef();
  const initialRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const [position, setPosition] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const onLocationSelect = coords => {
    setLocation(coords);
    let data = {
      latitude: coords.location.lat,
      longitude: coords.location.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    mapRef.current.animateToRegion(data, 4000);
    setPosition(data);
  };

  return {
    position,
    mapRef,
    onLocationSelect,
    initialRegion,
  };
};

export default useMapController;
