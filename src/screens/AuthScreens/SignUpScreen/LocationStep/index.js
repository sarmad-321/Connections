import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useRef, useState} from 'react';
import Question from '../../../../components/Question';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../../../assets';
import styles from './styles';
import MainButton from '../../../../components/Buttons/MainButton';
import useMapController from './useMapController';
import MapView from 'react-native-maps';
import AddressPicker from '../../../../components/AddressField/AddressPicker';

const LocationStep = ({setLocation}) => {
  const {position, mapRef, onLocationSelect} = useMapController(setLocation);
  const pickerRef = useRef();
  return (
    <SafeAreaView>
      <Question step={'05'} text={`Where Do You Live?`} />
      <View style={styles.imgContainer}>
        <MapView
          style={styles.map}
          ref={mapRef}
          initialRegion={position}></MapView>
        <MainButton
          onPress={() => pickerRef.current.modalShow()}
          style={styles.button}
          icon={icons.target}>
          Add Your Address
        </MainButton>
        <AddressPicker
          ref={pickerRef}
          onValueChange={item => {
            if (item?.found) {
              onLocationSelect(item);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LocationStep;
