import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons, images} from '../../assets';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import Poppins from '../TextWrapper/Poppins';
import ActiveStatus from '../ActiveStatus';
import TextIcon from '../Buttons/TextIcon';
import LikeIcon from '../Buttons/LikeIcon';
import LinearGradient from 'react-native-linear-gradient';
import {gradient} from '../ListProfileCard/style';

const ProfileCard = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <ImageBackground style={styles.imageContainer} source={props?.img}>
      <LinearGradient style={{flex: 1}} colors={gradient}>
        <View style={styles.margin}>
          <View style={styles.detailContainer}>
            <AbhayaLibre style={styles.h1}>
              {props?.name}, {props?.age}
            </AbhayaLibre>
            <View style={styles.detailsText}>
              <Image source={icons.location} style={styles.icon} />
              {props?.distance ? (
                <Poppins style={styles.h2}>
                  Distance - {props?.distance}
                </Poppins>
              ) : null}
            </View>
            <ActiveStatus />
          </View>

          <View style={styles.iconsContainer}>
            {props?.comment ? <TextIcon onPress={handleOnPress} /> : null}
            {props?.like ? <LikeIcon /> : null}
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ProfileCard;
