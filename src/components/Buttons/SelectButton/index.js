import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MyStyles, {gradient} from './styles';
import Poppins from '../../TextWrapper/Poppins';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SelectButton = props => {
  const styles = MyStyles();

  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      style={styles.bottomShadow}
      onPress={handleOnPress}
      styles={props?.containerStyle}
      activeOpacity={0.7}>
      <LinearGradient
        colors={props.selectedGradient ? props.selectedGradient : gradient}
        style={[styles.container, props.styles]}>
        {props?.icon ? <Image source={props.icon} style={styles.icon} /> : null}
        <Poppins style={[styles.text, props.textStyles]}>{props.text}</Poppins>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SelectButton;
