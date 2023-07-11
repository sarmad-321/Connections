import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

export const darkStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rosesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    color: colors.light.primary,
    fontSize: vh * 2,
  },
  h2: {
    color: colors.offwhite,
    fontSize: vh * 1.6,
  },
  gap: {
    height: vh * 15,
  },
  h1blue: {
    color: colors.light.secondary,
  },
  verticalpad: {
    paddingVertical: vh * 1,
  },
  buyMore: {
    color: colors.light.secondary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: vh * 1,
    fontSize: vh * 2,
    fontWeight: 700,
  },
  buybutton: {
    width: vw * 30,
    alignSelf: 'center',
  },
});
export const lightStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rosesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    color: colors.dark.primary,
    fontSize: vh * 2,
  },
  h2: {
    color: colors.grey,
    fontSize: vh * 1.6,
  },
  gap: {
    height: vh * 15,
  },
  h1blue: {
    color: colors.light.secondary,
  },
  verticalpad: {
    paddingVertical: vh * 1,
  },
  buyMore: {
    color: colors.light.secondary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: vh * 1,
    fontSize: vh * 2,
    fontWeight: 700,
  },
  buybutton: {
    width: vw * 30,
    alignSelf: 'center',
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
