import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Mulish from '../TextWrapper/Mulish';
import {icons} from '../../assets';
import MyStyles from './styles';

const HomeHeader = props => {
  const styles = MyStyles();
  return (
    <View style={styles.header}>
      <Mulish style={styles.h1}>{props?.title}💖🥰</Mulish>
      <View style={styles.bottomshadow}>
        <TouchableOpacity activeOpacity={0.7} style={styles.imgContainer}>
          <Image style={styles.img} source={icons.goBack} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
