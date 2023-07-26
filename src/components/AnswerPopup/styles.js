import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';
import { useTheme } from '@react-navigation/native';

// const lightStyles = StyleSheet.create({
//   modal: {
//     flex: 1,
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//   },
//   innerContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     height: vh * 59,
//     width: '95%',
//   },
//   mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     backgroundColor: '#00000061',
//     paddingTop: vh * 20,
//   },
//   h1: {
//     fontSize: vh * 3.5,
//     width: '80%',
//     color: colors.light.btnText,
//   },
//   h2: {
//     fontSize: vh * 1.4,
//     width: '80%',
//     paddingVertical: '2%',
//     color: colors.greyText,
//     fontWeight: '500',
//   },
//   img: {
//     tintColor: colors.dark.primary,
//     resizeMode: 'contain',
//     height: vh * 5,
//     width: vw * 20,
//   },
//   imgcontainer: {alignItems: 'center'},
//   padding: {
//     flex: 1,
//     paddingVertical: '8%',
//     paddingHorizontal: '8%',
//   },
// });
// const darkStyles = StyleSheet.create({
//   modal: {
//     flex: 1,
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//   },
//   innerContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     height: vh * 50,
//     width: '95%',
//   },
//   mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     backgroundColor: '#00000061',
//     paddingTop: vh * 20,
//   },
//   h1: {
//     fontSize: vh * 3.5,
//     width: '80%',
//     color: colors.dark.btnText,
//   },
//   h2: {
//     fontSize: vh * 1.4,
//     width: '80%',
//     paddingVertical: '2%',
//     color: colors.greyText,
//     fontWeight: '500',
//   },
//   img: {
//     tintColor: colors.dark.primary,
//     resizeMode: 'contain',
//     height: vh * 5,
//     width: vw * 20,
//   },
//   imgcontainer: {alignItems: 'center'},
//   padding: {
//     flex: 1,
//     paddingVertical: '8%',
//     paddingHorizontal: '8%',
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
    modal: {
      flex: 1,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
    },
    innerContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      height: vh * 50,
      width: '95%',
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#00000061',
      paddingTop: vh * 20,
    },
    h1: {
      fontSize: vh * 3.5,
      width: '80%',
      color: colors.fontColors.primary,
    },
    h2: {
      fontSize: vh * 1.4,
      width: '80%',
      paddingVertical: '2%',
      color: colors.greyText,
      fontWeight: '500',
    },
    img: {
      tintColor: colors.fontColors.primary,
      resizeMode: 'contain',
      height: vh * 5,
      width: vw * 20,
    },
    imgcontainer: { alignItems: 'center' },
    padding: {
      flex: 1,
      paddingVertical: '8%',
      paddingHorizontal: '8%',
    },
  });
  return styles;
};

export default MyStyles;