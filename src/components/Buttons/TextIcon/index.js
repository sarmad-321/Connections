import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../assets';

const TextIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={icons.comment} style={styles.icon} />
    </View>
  );
};

export default TextIcon;
