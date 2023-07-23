import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { images } from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';
import MainButton from '../Buttons/MainButton';
import MyStyles from './styles';
import Animated, { BounceInDown, BounceInUp } from 'react-native-reanimated';

const EmptyLikes = props => {
  const styles = MyStyles();
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <View>
      <Animated.View
        entering={BounceInDown.duration(600)}
        style={styles.imgcontainer}>
        <Image source={props?.image} style={styles.img} />
      </Animated.View>
      <View style={styles.textBox}>
        <FranklinMedium style={styles.h1}>
          You’re new here! No {props?.title} Yet
        </FranklinMedium>
        <Poppins style={styles.h2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </Poppins>
        <MainButton onPress={handleOnPress}>Wait for Perfect Match</MainButton>
      </View>
    </View>
  );
};

export default EmptyLikes;
