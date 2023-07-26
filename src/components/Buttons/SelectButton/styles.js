import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { vh, vw } from '../../../utils/units';
import { colors } from '../../../utils/theme';
import { useTheme } from '@react-navigation/native';

export const gradient = ['white', 'white'];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];
// const darkStyles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     height: '99%',
//     width: '100%',
//     borderRadius: vh * 1,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: vh * 1.8,
//     textAlignVertical: 'center',
//     color: colors.dark.btnText,
//   },
//   bottomShadow: {
//     overflow: 'hidden',
//     // backgroundColor: "white",
//     height: vh * 6,
//     marginRight: vw * 4,
//     marginTop: vh * 2,
//     width: vw * 40,
//     borderRadius: vh * 1,
//     // backgroundColor: colors.light.primary,
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   icon: {
//     resizeMode: 'contain',
//     tintColor: 'white',
//     width: vh * 5,
//     height: '30%',
//   },
// });
// const lightStyles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     height: '99%',
//     width: '100%',
//     borderRadius: vh * 1,
//   },
//   text: {
//     fontSize: vh * 1.8,
//     color: colors.light.btnText,
//   },
//   bottomShadow: {
//     overflow: 'hidden',
//     // backgroundColor: "white",
//     height: vh * 6,
//     marginRight: vw * 4,
//     marginTop: vh * 2,
//     width: vw * 40,
//     borderRadius: vh * 1,
//     // backgroundColor: colors.light.primary,
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   icon: {
//     resizeMode: 'contain',
//     tintColor: colors.grey,
//     width: vh * 5,
//     height: '30%',
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
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flexDirection: 'row',
      height: '99%',
      width: '100%',
      borderRadius: vh * 1,
    },
    text: {
      fontSize: vh * 1.8,
      color: colors.fontColors.primary,
    },
    bottomShadow: {
      overflow: 'hidden',
      // backgroundColor: "white",
      height: vh * 6,
      marginRight: vw * 4,
      marginTop: vh * 2,
      width: vw * 40,
      borderRadius: vh * 1,
      // backgroundColor: colors.light.primary,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 4,
    },
    icon: {
      resizeMode: 'contain',
      tintColor: colors.grey,
      width: vh * 5,
      height: '30%',
    },
  });
  return styles;
};

export default MyStyles;
