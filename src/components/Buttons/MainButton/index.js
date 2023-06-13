import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

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
      <Text style={styles.title}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
