import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { vh } from '../../../utils/units';
import { colors } from '../../../utils/theme';
import { useTheme } from '@react-navigation/native';

export const gradient = ['white', 'white'];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];
// const darkStyles = StyleSheet.create({
//   container: {
//     // alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     alignSelf: 'flex-start',
//     paddingHorizontal: vh * 3,
//     height: vh * 10,
//     borderRadius: vh * 1,
//     borderColor: colors.dark.secondary,
//     backgroundColor: colors.dark.primary,
//     borderWidth: vh * 0.1,
//     borderStyle: 'dashed',
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 6,
//     overflow: 'visible',
//   },
//   iconView: {
//     height: vh * 2,
//     width: vh * 2,
//     justifyContent: 'center',
//     position: 'absolute',
//     zIndex: 100,
//     right: 0,
//     top: -vh * 1,
//     alignItems: 'center',
//     backgroundColor: colors.light.secondary,
//     borderRadius: 100,
//   },
//   icon: {
//     height: '60%',
//     width: '60%',
//     resizeMode: 'contain',
//   },
//   text: {
//     fontSize: vh * 1.8,
//     color: colors.dark.btnText,
//     fontStyle: 'italic',
//   },
//   bottomShadow: {
//     height: vh * 12.5,
//     width: '100%',
//     paddingTop: vh * 1.5,
//   },
// });
// const lightStyles = StyleSheet.create({
//   container: {
//     // alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     alignSelf: 'flex-start',
//     paddingHorizontal: vh * 3,
//     height: vh * 10,
//     borderRadius: vh * 1,
//     borderColor: colors.light.secondary,
//     backgroundColor: colors.light.primary,
//     borderWidth: vh * 0.1,
//     borderStyle: 'dashed',
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 6,
//     overflow: 'visible',
//   },
//   icon: {
//     height: '60%',
//     width: '60%',
//     resizeMode: 'contain',
//   },
//   iconView: {
//     height: vh * 2,
//     width: vh * 2,
//     justifyContent: 'center',
//     position: 'absolute',
//     zIndex: 100,
//     right: 0,
//     top: -vh * 1,
//     alignItems: 'center',
//     backgroundColor: colors.light.secondary,
//     borderRadius: 100,
//   },
//   text: {
//     fontSize: vh * 1.8,
//     color: colors.light.btnText,
//     fontStyle: 'italic',
//   },
//   bottomShadow: {
//     height: vh * 12.5,
//     width: '100%',
//     paddingTop: vh * 1.5,
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
    container: {
      // alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      alignSelf: 'flex-start',
      paddingHorizontal: vh * 3,
      height: vh * 10,
      borderRadius: vh * 1,
      borderColor: colors.secondary,
      backgroundColor: colors.primary,
      borderWidth: vh * 0.1,
      borderStyle: 'dashed',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 6,
      overflow: 'visible',
    },
    icon: {
      height: '60%',
      width: '60%',
      resizeMode: 'contain',
    },
    iconView: {
      height: vh * 2,
      width: vh * 2,
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 100,
      right: 0,
      top: -vh * 1,
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 100,
    },
    text: {
      fontSize: vh * 1.8,
      color: colors.fontColors.primary,
      fontStyle: 'italic',
    },
    bottomShadow: {
      height: vh * 12.5,
      width: '100%',
      paddingTop: vh * 1.5,
    },
  });
  return styles;
};

export default MyStyles;