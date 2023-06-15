import {StyleSheet, ImageBackground, Text, View, Image} from 'react-native';
import React from 'react';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import {icons, images} from '../../assets';
import Poppins from '../TextWrapper/Poppins';
import ActiveStatus from '../ActiveStatus';
import styles from './style';

const ListProfileCard = () => {
  return (
    <ImageBackground style={styles.imageContainer} source={images.profileDummy}>
      <View style={styles.margin}>
        <View style={styles.detailContainer}>
          <FranklinMedium style={styles.h1}>Kelvin, 23</FranklinMedium>
          <View style={styles.detailsText}>
            <Image source={icons.location} style={styles.icon} />
            <Poppins style={styles.h2}>LOS ANGELES • 20 KMS AWAY</Poppins>
          </View>
        </View>
        <View style={styles.activity}>
          <ActiveStatus />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ListProfileCard;
