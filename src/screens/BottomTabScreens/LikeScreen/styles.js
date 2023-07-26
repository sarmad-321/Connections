import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
import { useTheme } from '@react-navigation/native';
export const lightGradient = [colors.light.primary, colors.light.primary];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];
export const darkSelectedGradient = ['#5B5B5B', colors.light.secondary];
const lineColor = 'rgba(57, 57, 57, 0.5)';
export const lightSelectedGradient = [
  colors.light.secondary,
  colors.light.secondary,
];

// const lightStyles = StyleSheet.create({
//   fixedIcon: {height: '80%', tintColor: colors.light.secondary, width: '50%'},
//   fixedbtn: {height: vh * 8, width: vh * 8},
//   fixedButtonContainer: {
//     position: 'absolute',
//     bottom: vh * 13,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'red',
//     width: vw * 100,
//   },
//   line: {
//     marginTop: vh * 4,
//     borderBottomColor: lineColor,
//     borderBottomWidth: 1,
//     width: '100%',
//   },
// });

// const darkStyles = StyleSheet.create({
//   fixedIcon: {height: '80%', width: '50%'},
//   fixedbtn: {height: vh * 8, width: vh * 8},
//   fixedButtonContainer: {
//     position: 'absolute',
//     bottom: vh * 13,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: 'red',
//     width: vw * 100,
//   },
//   line: {
//     marginTop: vh * 4,
//     borderBottomColor: lineColor,
//     borderBottomWidth: 1,
//     width: '100%',
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

// export default MyStyles;
const MyStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    fixedIcon: { height: '80%', width: '50%' },
    fixedbtn: { height: vh * 8, width: vh * 8 },
    fixedButtonContainer: {
      position: 'absolute',
      bottom: vh * 13,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red',
      width: vw * 100,
    },
    line: {
      marginTop: vh * 4,
      borderBottomColor: lineColor,
      borderBottomWidth: 1,
      width: '100%',
    },
  });
  return styles;
};

export default MyStyles;
