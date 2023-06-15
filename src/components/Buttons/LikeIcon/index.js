import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {icons} from '../../../assets';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LikeIcon = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image source={icons.heart} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default LikeIcon;
