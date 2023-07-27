import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { vh } from '../../utils/units';
import { colors } from '../../utils/theme';
import { useTheme } from '@react-navigation/native';

// const lightStyles = StyleSheet.create({
//   imgcontainer: {height: vh * 40, width: '100%', marginTop: vh * 10},
//   img: {resizeMode: 'contain', width: '100%', height: '100%'},
//   textBox: {
//     height: vh * 25,
//     width: '100%',
//     justifyContent: 'space-evenly',
//   },
//   h1: {
//     fontSize: vh * 2.8,
//     color: colors.dark.primary,
//     textAlign: 'center',
//   },
//   h2: {
//     fontSize: vh * 1.6,
//     paddingHorizontal: '10%',
//     color: colors.dark.primary,
//     textAlign: 'center',
//   },
// });
// const darkStyles = StyleSheet.create({
//   imgcontainer: {height: vh * 40, width: '100%', marginTop: vh * 10},
//   img: {resizeMode: 'contain', width: '100%', height: '100%'},
//   textBox: {
//     height: vh * 25,
//     width: '100%',
//     justifyContent: 'space-evenly',
//   },
//   h1: {
//     fontSize: vh * 2.8,
//     textAlign: 'center',
//     color: colors.light.primary,
//   },
//   h2: {
//     fontSize: vh * 1.6,
//     paddingHorizontal: '10%',
//     color: colors.offwhite,
//     textAlign: 'center',
//   },
// });

// const MyStyles = () => {
//   const theme = useColorScheme();
//   if (theme == 'dark') {
//     return darkStyles;
//   } else {
//     return lightStyles;
//   }
// };
const MyStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    imgcontainer: { height: vh * 40, width: '100%', marginTop: vh * 10 },
    img: { resizeMode: 'contain', width: '100%', height: '100%' },
    textBox: {
      height: vh * 25,
      width: '100%',
      justifyContent: 'space-evenly',
    },
    h1: {
      fontSize: vh * 2.8,
      textAlign: 'center',
      color: colors.fontColors.primary,
    },
    h2: {
      fontSize: vh * 1.6,
      paddingHorizontal: '10%',
      color: colors.fontColors.primary,
      textAlign: 'center',
    },
  });
  return styles;
};
export default MyStyles;
