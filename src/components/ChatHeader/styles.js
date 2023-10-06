import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';
import {useTheme} from '@react-navigation/native';

// const darkStyles = StyleSheet.create({
//   container: {
//     height: vh * 15,
//     flexDirection: 'row',
//     backgroundColor: '#121414',
//     alignItems: 'center',
//   },
//   imgContainer: {
//     height: vh * 6,
//     width: vh * 6,
//     marginHorizontal: vh * 1,
//     borderRadius: 100,
//     overflow: 'hidden',
//   },
//   dot: {
//     height: vh * 1.2,
//     width: vh * 1.2,
//     borderRadius: 100,
//     position: 'absolute',
//     backgroundColor: colors.light.secondary,
//     bottom: vh * 0.3,
//     right: vh * 1.2,
//   },
//   img: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: '100%',
//   },
//   backimg: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: '70%',
//   },
//   backContainer: {
//     height: vh * 6,
//     width: vh * 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   h1: {
//     color: colors.light.primary,
//     fontSize: vh * 1.8,
//   },
//   textContainer: {
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
//   h2: {
//     color: colors.grey,
//     fontSize: vh * 1.4,
//   },
// });
// const lightStyles = StyleSheet.create({
//   container: {
//     height: vh * 15,
//     // borderBottomWidth: vh * 0.05,
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     // marginBottom: vh * 1,
//     alignItems: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,

//     elevation: 6,
//   },
//   imgContainer: {
//     height: vh * 6,
//     width: vh * 6,
//     marginHorizontal: vh * 1,
//     borderRadius: 100,
//     overflow: 'hidden',
//   },
//   dot: {
//     height: vh * 1.2,
//     width: vh * 1.2,
//     borderRadius: 100,
//     position: 'absolute',
//     backgroundColor: colors.light.secondary,
//     bottom: vh * 0.3,
//     right: vh * 1.2,
//   },
//   img: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: '100%',
//   },
//   backimg: {
//     resizeMode: 'contain',
//     width: '100%',
//     height: '70%',
//   },
//   backContainer: {
//     height: vh * 6,
//     width: vh * 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   h1: {
//     color: colors.dark.primary,
//     fontSize: vh * 1.8,
//   },
//   textContainer: {
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
//   h2: {
//     color: colors.greyText,
//     fontSize: vh * 1.4,
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
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      height: vh * 15,
      // borderBottomWidth: vh * 0.05,
      flexDirection: 'row',
      backgroundColor: colors.primary,
      // marginBottom: vh * 1,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    imgContainer: {
      height: vh * 6,
      width: vh * 6,
      marginHorizontal: vh * 1,
      borderRadius: 100,
      overflow: 'hidden',
    },
    dot: {
      height: vh * 1.2,
      width: vh * 1.2,
      borderRadius: 100,
      position: 'absolute',
      backgroundColor: colors.secondary,
      bottom: vh * 0.3,
      right: vh * 1.2,
    },
    img: {
      resizeMode: 'contain',
      width: '100%',
      height: '100%',
    },
    backimg: {
      resizeMode: 'contain',
      width: '100%',
      height: '70%',
      tintColor: colors.border,
    },
    backContainer: {
      height: vh * 6,
      width: vh * 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    h1: {
      color: colors.fontColors.primary,
      fontSize: vh * 1.8,
    },
    textContainer: {
      // alignItems: 'center',
      justifyContent: 'center',
    },
    h2: {
      color: colors.grey,
      fontSize: vh * 1.4,
    },
  });
  return styles;
};

export default MyStyles;
