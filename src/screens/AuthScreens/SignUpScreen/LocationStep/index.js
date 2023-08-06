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

const LocationStep = () => {
  const {position, mapRef} = useMapController();
  const pickerRef = useRef();
  return (
    <SafeAreaView>
      <Question step={'04'} text={`Where Do You Live?`} />
      <View style={styles.imgContainer}>
        {/* <ImageBackground source={images.map} style={styles.img}>
          <MainButton style={styles.button} icon={icons.target}>
            Go to Current Location
          </MainButton>
        </ImageBackground> */}
        <MapView
          style={styles.map}
          //specify our coordinates.
          ref={mapRef}
          // onRegionChange={test => setPosition(test)}
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
              console.log(item);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LocationStep;
