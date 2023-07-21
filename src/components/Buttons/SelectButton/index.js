import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MyStyles, { darkGradient, gradient } from './styles';
import Poppins from '../../TextWrapper/Poppins';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectButton = props => {
  const styles = MyStyles();
  const theme = useColorScheme();
  const colors = props.selectedGradient
    ? props.selectedGradient
    : theme === 'dark'
      ? darkGradient
      : gradient;
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
      <LinearGradient colors={colors} style={[styles.container, props.styles]}>
        {props?.icon ? (
          <Image source={props.icon} style={[styles.icon, props.iconStyle]} />
        ) : null}
        {props?.text ? (
          <Poppins style={[styles.text, props.textStyles]}>
            {props.text}
          </Poppins>
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SelectButton;
