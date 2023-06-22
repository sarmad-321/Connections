import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

const lightStyles = StyleSheet.create({
  container: {
    paddingVertical: vh * 1.5,
  },
  list: {
    height: vh * 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: vh * 0.04,
    borderColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    marginRight: vh * 1,
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
  },
  text: {
    fontSize: vh * 1.8,
    color: colors.greyText,
    textAlignVertical: 'center',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    paddingVertical: vh * 1.5,
  },
  list: {
    height: vh * 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: vh * 0.04,
    borderColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    marginRight: vh * 1,
    tintColor: colors.light.primary,
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
  },
  text: {
    fontSize: vh * 1.8,
    color: colors.offwhite,
    textAlignVertical: 'center',
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
