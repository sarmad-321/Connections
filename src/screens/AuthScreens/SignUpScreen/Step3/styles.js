import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/theme';

const darkStyles = {
  selectedGradient: ['#5B5B5B', '#265DC7'],
  gradient: ['#5B5B5B', '#2E2E2E'],
};
const lightStyles = {
  selectedGradient: [colors.light.secondary, colors.light.secondary],
  gradient: ['white', 'white'],
  selectedText: {
    color: colors.light.primary,
  },
};
const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};
export default MyStyles;
