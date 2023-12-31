import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {vh} from '../utils/units';
import {colors} from '../utils/theme';
import {useTheme} from '@react-navigation/native';

const darkStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: vh * 1.6,
    height: vh * 1.6,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: vh * 2.5,
    color: 'grey',
  },
  closeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // header: {
  //   backgroundColor: 'red',
  // },
});
const lightStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // header: {
  //   backgroundColor: 'green',
  // },
  icon: {
    width: vh * 1.6,
    height: vh * 1.6,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: vh * 2.5,
    color: 'rgba(15, 15, 15, 1)',
  },
  closeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: vh * 1.6,
      height: vh * 1.6,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: vh * 2.5,
      color: colors.fontColors.primary,
    },
    closeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    // header: {
    //   backgroundColor: 'red',
    // },
  });
  return styles;
};
export default MyStyles;
