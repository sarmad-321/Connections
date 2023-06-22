import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {vh} from '../../../../utils/units';
import {colors} from '../../../../utils/theme';

const lightStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 1.6,
    color: colors.greyText,
  },
  listContainer: {
    height: vh * 6,
    justifyContent: 'center',
    // alignItems: 'center',
    borderTopWidth: vh * 0.04,
    borderColor: colors.grey,
  },
});
const darkStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 1.6,
    color: 'white',
  },
  listContainer: {
    height: vh * 6,
    justifyContent: 'center',
    // alignItems: 'center',
    borderTopWidth: vh * 0.04,
    borderColor: colors.grey,
  },
});
const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};
export default MyStyles;
