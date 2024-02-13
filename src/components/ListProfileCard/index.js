import {StyleSheet, ImageBackground, Text, View, Image} from 'react-native';
import React from 'react';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import {icons, images} from '../../assets';
import Poppins from '../TextWrapper/Poppins';
import ActiveStatus from '../ActiveStatus';
import styles, {gradient} from './style';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {stringReduce} from '../../redux/Api/HelperFunction';

const ListProfileCard = props => {
  return (
    <Animated.View entering={SlideInLeft.duration((props.index + 1) * 300)}>
      <ImageBackground style={styles.imageContainer} source={props?.img}>
        <Image style={styles.blind} source={icons.blindbutton} />
        <LinearGradient style={styles.fill} colors={gradient}>
          <View style={styles.margin}>
            <View style={styles.detailContainer}>
              <FranklinMedium style={styles.h1}>
                {props?.name}, {props?.age}
              </FranklinMedium>
              <View style={styles.detailsText}>
                <Image source={icons.location} style={styles.icon} />
                <Poppins style={styles.h2}>
                  {stringReduce(props?.city, 20)} • {props?.distance}
                </Poppins>
              </View>
            </View>
            <View style={styles.activity}>
              <ActiveStatus />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};

export default ListProfileCard;
