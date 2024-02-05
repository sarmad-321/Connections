import {StyleSheet, useColorScheme} from 'react-native';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';
import {useTheme} from '@react-navigation/native';
export const lightGradient = [colors.light.primary, colors.light.primary];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];
// const lightStyles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//   },
//   header: {
//     height: vh * 8,
//     alignItems: 'center',
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   bottomshadow: {
//     overflow: 'hidden',
//     paddingBottom: vh * 0.6,
//     paddingHorizontal: vh * 0.1,
//   },
//   h1: {
//     fontSize: vh * 3,
//     fontWeight: '700',
//     color: colors.dark.primary,
//   },
//   imgContainer: {
//     height: vh * 5,
//     width: vh * 5,
//     marginRight: vh * 1,
//     // borderRadius: vh * 1,
//     borderBottomLeftRadius: vh * 1,
//     borderBottomRightRadius: vh * 1,
//     backgroundColor: colors.light.primary,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 6,
//   },
//   img: {
//     resizeMode: 'contain',
//     width: '70%',
//     height: '70%',
//     tintColor: colors.light.secondary,
//   },
// });

// const darkStyles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//   },
//   header: {
//     height: vh * 8,
//     alignItems: 'center',
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   bottomshadow: {
//     overflow: 'hidden',
//     paddingBottom: vh * 0.6,
//     paddingHorizontal: vh * 0.1,
//   },
//   h1: {
//     fontSize: vh * 3,
//     fontWeight: '700',
//     color: colors.light.primary,
//   },
//   imgContainer: {
//     height: vh * 5,
//     width: vh * 5,
//     // borderRadius: vh * 1,
//     marginRight: vh * 1,
//     borderRadius: vh * 0.5,
//     backgroundColor: colors.blackheaderbutton,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 6,
//   },
//   img: {
//     resizeMode: 'contain',
//     width: '70%',
//     height: '70%',
//     tintColor: colors.light.primary,
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
    row: {
      flexDirection: 'row',
    },
    header: {
      height: vh * 8,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
    },
    bottomshadow: {
      overflow: 'hidden',
      paddingBottom: vh * 0.6,
      paddingHorizontal: vh * 0.1,
    },
    h1: {
      fontSize: vh * 3,
      fontWeight: '700',
      color: colors.fontColors.primary,
    },
    imgContainer: {
      height: vh * 5,
      width: vh * 5,
      // borderRadius: vh * 1,
      marginRight: vh * 1,
      borderRadius: vh * 0.5,
      backgroundColor: colors.blackheaderbutton,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 6,
    },
    img: {
      resizeMode: 'contain',
      width: '70%',
      height: '70%',
      tintColor: colors.fontColors.primary,
    },
  });
  return styles;
};
export default MyStyles;
