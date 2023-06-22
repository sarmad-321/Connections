import {StyleSheet, ImageBackground, Text, View, Image} from 'react-native';
import React from 'react';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import {icons, images} from '../../assets';
import Poppins from '../TextWrapper/Poppins';
import ActiveStatus from '../ActiveStatus';
import styles, {gradient} from './style';
import LinearGradient from 'react-native-linear-gradient';

const ListProfileCard = props => {
  return (
    <ImageBackground style={styles.imageContainer} source={images.profileDummy}>
      <LinearGradient style={styles.fill} colors={gradient}>
        <View style={styles.margin}>
          <View style={styles.detailContainer}>
            <FranklinMedium style={styles.h1}>
              {props?.name}, {props?.age}
            </FranklinMedium>
            <View style={styles.detailsText}>
              <Image source={icons.location} style={styles.icon} />
              <Poppins style={styles.h2}>
                {props?.city} • {props?.distance}
              </Poppins>
            </View>
          </View>
          <View style={styles.activity}>
            <ActiveStatus />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ListProfileCard;
