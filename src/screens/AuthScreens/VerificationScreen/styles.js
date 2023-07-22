import { StyleSheet, useColorScheme } from 'react-native';
import { vh, vw } from '../../../utils/units';
import { colors, fontColors } from '../../../utils/theme';
import { useTheme } from '@react-navigation/native';

// const lightStyles = StyleSheet.create({
//   button: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   info: {
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   roundedTextInput: {
//     color: 'black',
//     borderRadius: vw * 3,
//     borderWidth: vw * 0.3,
//     borderBottomWidth: vw * 0.2,
//     backgroundColor: colors.light.primary,
//     width: vw * 18,
//     height: vh * 8,
//     marginLeft: 0,
//     shadowColor: '#000',
//     shadowOffset: {width: 1, height: 1},
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 6,

//     // marginRight: Platform.OS === 'ios' ? RFValue(10): RFValue(15),
//   },
//   textInputContainer: {
//     width: '100%',
//   },
//   h3: {
//     color: colors.light.secondary,
//     fontSize: vh * 1.8,
//     textDecorationLine: 'underline',
//   },
//   touch: {
//     paddingVertical: vh * 1,
//     alignSelf: 'flex-end',
//   },
// });

// const darkStyles = StyleSheet.create({
//   button: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   info: {
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
//   roundedTextInput: {
//     color: 'black',
//     borderRadius: vw * 3,
//     borderWidth: vw * 0.3,

//     borderBottomWidth: vw * 0.2,
//     backgroundColor: 'grey',
//     width: vw * 18,
//     height: vh * 8,
//     marginLeft: 0,

//     // marginRight: Platform.OS === 'ios' ? RFValue(10): RFValue(15),
//   },
//   textInputContainer: {
//     width: '100%',
//   },
//   touch: {
//     paddingVertical: vh * 1,
//     alignSelf: 'flex-end',
//   },
//   h3: {
//     color: colors.light.secondary,
//     fontSize: vh * 1.8,
//     textDecorationLine: 'underline',
//   },
// });

const MyStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    info: {
      justifyContent: 'center',
      alignContent: 'center',
    },
    roundedTextInput: {
      color: colors.fontColors.primary,
      borderRadius: vw * 3,
      borderWidth: vw * 0.3,

      borderBottomWidth: vw * 0.2,
      backgroundColor: colors.primary,
      width: vw * 18,
      height: vh * 8,
      marginLeft: 0,

      // marginRight: Platform.OS === 'ios' ? RFValue(10): RFValue(15),
    },
    textInputContainer: {
      width: '100%',
    },
    touch: {
      paddingVertical: vh * 1,
      alignSelf: 'flex-end',
    },
    h3: {
      color: colors.secondary,
      fontSize: vh * 1.8,
      textDecorationLine: 'underline',
    },
  });
  return styles;
};

export default MyStyles;
