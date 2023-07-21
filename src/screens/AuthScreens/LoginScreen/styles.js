import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';
import {useTheme} from '@react-navigation/native';

// const lightStyles = StyleSheet.create({
//   h1: {
//     fontSize: vh * 4,
//     color: fontColors.light.primary,
//     marginTop: vh * 4,
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   info: {
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   inputContainer: {
//     height: vh * 20,

//     justifyContent: 'flex-end',
//     paddingBottom: vh * 1.5,
//   },
// });

// const darkStyles = StyleSheet.create({
//   h1: {
//     fontSize: vh * 4,
//     width: vw * 60,
//     color: fontColors.dark.primary,
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   info: {
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   inputContainer: {
//     height: vh * 20,

//     justifyContent: 'flex-end',
//     paddingBottom: vh * 1.5,
//   },
// });

const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    h1: {
      fontSize: vh * 4,
      color: colors.fontColors.primary,
      marginTop: vh * 4,
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    info: {
      justifyContent: 'center',
      alignContent: 'center',
    },
    inputContainer: {
      height: vh * 20,

      justifyContent: 'flex-end',
      paddingBottom: vh * 1.5,
    },
  });
  return styles;
};

export default MyStyles;
