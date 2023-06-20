import {StyleSheet, Text, View, useColorScheme, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Poppins from '../../TextWrapper/Poppins';
import MyStyles, {darkGradient, gradient} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../../assets';

const PromptButton = props => {
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
      <View style={styles.iconView}>
        <Image source={icons.plus} style={styles.icon} />
      </View>

      <LinearGradient colors={colors} style={[styles.container, props.styles]}>
        <Poppins style={styles.text}>Select a prompt</Poppins>
        <Poppins style={styles.text}>and write your answer</Poppins>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PromptButton;

const styles = StyleSheet.create({});
