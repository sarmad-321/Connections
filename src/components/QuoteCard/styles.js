import {StyleSheet, useColorScheme, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

const lightStyles = StyleSheet.create({
  descContainer: {
    height: vh * 18,
  },
  textContainer: {
    width: '75%',
  },
  padding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4%',
  },
  text: {
    fontSize: vh * 1.6,
    color: colors.greyText,
  },
  h1: {
    fontSize: vh * 3,
    color: colors.dark.primary,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
});

const darkStyles = StyleSheet.create({
  descContainer: {
    height: vh * 18,
  },
  textContainer: {
    width: '75%',
  },
  padding: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: '4%',
  },
  text: {
    fontSize: vh * 1.6,
    color: colors.offwhite,
  },
  h1: {
    fontSize: vh * 3,
    color: colors.light.primary,
  },
  iconContainer: {
    height: '100%',
    width: '25%',

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
