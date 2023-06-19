import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../assets';
import {vh} from '../../../utils/units';

const MainButton = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      activeOpacity={0.7}
      onPress={handleOnPress}>
      {props?.icon ? <Image source={props.icon} style={styles.icon} /> : null}
      <Text style={styles.title}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
