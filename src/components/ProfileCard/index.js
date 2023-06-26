import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons, images} from '../../assets';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import Poppins from '../TextWrapper/Poppins';
import ActiveStatus from '../ActiveStatus';
import TextIcon from '../Buttons/TextIcon';
import LikeIcon from '../Buttons/LikeIcon';

const ProfileCard = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <ImageBackground style={styles.imageContainer} source={images.profileDummy}>
      <View style={styles.margin}>
        <View style={styles.detailContainer}>
          <AbhayaLibre style={styles.h1}>Kelvin, 23</AbhayaLibre>
          <View style={styles.detailsText}>
            <Image source={icons.location} style={styles.icon} />
            <Poppins style={styles.h2}>LOS ANGELES • 20 KMS AWAY</Poppins>
          </View>
          <ActiveStatus />
        </View>

        <View style={styles.iconsContainer}>
          {props?.comment ? <TextIcon onPress={handleOnPress} /> : null}
          {props?.like ? <LikeIcon /> : null}
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileCard;
