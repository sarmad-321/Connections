import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

export const darkStyles = StyleSheet.create({
  imgContainer: {
    height: vh * 10,
    width: vh * 10,
    overflow: 'hidden',
    borderRadius: 100,
  },
  container: {
    height: vh * 10,
    width: vh * 10,
  },
  blueContainer: {
    height: vh * 3,
    width: vh * 3,
    backgroundColor: 'rgba(11, 94, 255, 0.6)',
    borderRadius: 100,
    position: 'absolute',
    bottom: vh * 0.1,
    right: 0,
    borderWidth: vh * 0.1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editimg: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  h1: {
    fontSize: vh * 2,
    marginVertical: vh * 1,
    color: colors.light.primary,
  },
  img: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
});
export const lightStyles = StyleSheet.create({
  imgContainer: {
    height: vh * 10,
    width: vh * 10,
    overflow: 'hidden',
    borderRadius: 100,
  },
  container: {
    height: vh * 10,
    width: vh * 10,
  },
  blueContainer: {
    height: vh * 3,
    width: vh * 3,
    backgroundColor: 'rgba(11, 94, 255, 0.6)',
    borderRadius: 100,
    position: 'absolute',
    bottom: vh * 0.1,
    right: 0,
    borderWidth: vh * 0.1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editimg: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  h1: {
    fontSize: vh * 2,
    marginVertical: vh * 1,
    color: colors.dark.primary,
  },
  img: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
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
