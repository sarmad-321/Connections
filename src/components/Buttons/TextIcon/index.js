import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TextIcon = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Image source={icons.comment} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default TextIcon;
