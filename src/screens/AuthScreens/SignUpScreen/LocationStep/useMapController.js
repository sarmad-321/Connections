import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

const useMapController = setLocation => {
  const mapRef = useRef();

  const [position, setPosition] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const onLocationSelect = coords => {
    setLocation(coords);
  };

  return {
    position,
    mapRef,
    onLocationSelect,
  };
};

export default useMapController;
