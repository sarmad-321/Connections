import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons, images} from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import MyStyles from './styles';

const ProfilePic = () => {
  const styles = MyStyles();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={images.profileDummy} style={styles.img} />
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.blueContainer}>
          <Image source={icons.edit} style={styles.editimg} />
        </TouchableOpacity>
      </View>
      <FranklinMedium style={styles.h1}>Sarah John</FranklinMedium>
    </View>
  );
};

export default ProfilePic;
