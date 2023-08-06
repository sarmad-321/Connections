import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/theme';
import {useTheme} from '@react-navigation/native';

const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    h1: {
      color: colors.fontColors.primary,
      fontSize: vh * 2,
    },

    h1blue: {
      color: colors.secondary,
    },
    verticalpad: {
      paddingVertical: vh * 1,
    },
  });
  return styles;
};

export default MyStyles;
