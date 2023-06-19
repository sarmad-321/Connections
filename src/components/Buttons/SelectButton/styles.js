import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {vh} from '../../../utils/units';
import {colors} from '../../../utils/theme';

export const gradient = ['white', 'white'];
const darkStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: vh * 5,
    height: vh * 5,
    borderRadius: vh * 1,
    margin: vh * 1,
    flexDirection: 'row',
  },
  text: {
    height: vh * 5,
    textAlign: 'center',
    fontSize: vh * 1.8,
    textAlignVertical: 'center',
    color: colors.dark.btnText,
  },
  icon: {
    resizeMode: 'contain',
    tintColor: 'white',
    width: vh * 5,
    height: '30%',
  },
});
const lightStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: vh * 5,
    height: vh * 5,
    borderRadius: vh * 1,
    margin: vh * 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  text: {
    height: vh * 5,
    textAlign: 'center',
    fontSize: vh * 1.8,
    textAlignVertical: 'center',
    color: colors.light.btnText,
  },
  bottomShadow: {
    overflow: 'hidden',
    paddingBottom: vh * 0.6,
  },
  icon: {
    resizeMode: 'contain',
    tintColor: colors.grey,
    width: vh * 5,
    height: '30%',
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