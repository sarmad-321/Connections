import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {icons} from '../../../assets';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NextButton = props => {
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
      <Image source={icons.next} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default NextButton;
