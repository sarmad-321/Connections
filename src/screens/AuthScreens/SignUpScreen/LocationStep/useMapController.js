import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';

const useMapController = () => {
  const mapRef = useRef();

  const [position, setPosition] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return {
    position,
    mapRef,
  };
};

export default useMapController;
