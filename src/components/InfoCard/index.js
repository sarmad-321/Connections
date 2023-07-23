import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { icons } from '../../assets';
import Poppins from '../TextWrapper/Poppins';
import MyStyles from './styles';
import Animated, { SlideInLeft } from 'react-native-reanimated';

const InfoCard = () => {
  const styles = MyStyles();
  return (
    <Animated.View
      entering={SlideInLeft.duration(400)}
      style={styles.container}>
      <View style={styles.list}>
        <View style={styles.row}>
          <Image source={icons.age} style={styles.img} />
          <Poppins style={styles.text}> 22</Poppins>
        </View>
        <View style={styles.row}>
          <Image source={icons.scale} style={styles.img} />
          <Poppins style={styles.text}> 5'3</Poppins>
        </View>
        <View style={styles.row}>
          <Image source={icons.location} style={styles.img} />
          <Poppins style={styles.text}> USA, America</Poppins>
        </View>
      </View>
      <View style={styles.list}>
        <View style={styles.row}>
          <Image source={icons.graduation} style={styles.img} />
          <Poppins style={styles.text}>
            Student at University of Lorem Ipsum
          </Poppins>
        </View>
      </View>
      <View style={styles.list}>
        <View style={styles.row}>
          <Image source={icons.country} style={styles.img} />
          <Poppins style={styles.text}>United State of America</Poppins>
        </View>
      </View>
    </Animated.View>
  );
};

export default InfoCard;
