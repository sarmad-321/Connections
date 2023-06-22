import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {vh, vw} from '../../../../utils/units';
import {colors} from '../../../../utils/theme';

const lightStyles = StyleSheet.create({
  container: {
    height: vh * 50,
    marginVertical: vh * 4,
    width: '100%',
  },
  h1: {
    fontSize: vh * 3.5,
    width: '80%',
    color: colors.light.btnText,
  },
  h2: {
    fontSize: vh * 1.4,
    width: '80%',
    paddingVertical: '2%',
    color: colors.greyText,
    fontWeight: '500',
  },
  img: {
    tintColor: colors.dark.primary,
    resizeMode: 'contain',
    height: vh * 5,
    width: vw * 20,
  },
  imgcontainer: {alignItems: 'center'},
  padding: {
    flex: 1,
    paddingVertical: '8%',
    paddingHorizontal: '8%',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    height: vh * 50,
    marginVertical: vh * 4,
    width: '100%',
  },
  h1: {
    fontSize: vh * 3.5,
    width: '80%',
    color: colors.light.primary,
  },
  h2: {
    fontSize: vh * 1.4,
    width: '80%',
    paddingVertical: '2%',
    color: colors.offwhite,
  },
  img: {
    tintColor: colors.light.primary,
    resizeMode: 'contain',
    height: vh * 5,
    width: vw * 20,
  },
  imgcontainer: {alignItems: 'center'},
  padding: {
    flex: 1,
    paddingVertical: '8%',
    paddingHorizontal: '8%',
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
