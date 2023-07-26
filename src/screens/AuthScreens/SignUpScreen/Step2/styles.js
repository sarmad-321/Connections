import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { vh } from '../../../../utils/units';

import { useTheme } from '@react-navigation/native';

// const darkStyles = StyleSheet.create({
//   text: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: vh * 4,
//   },
//   age: {
//     fontSize: vh * 4,
//     color: colors.light.primary,
//   },
//   poppin: {
//     fontSize: vh * 1.5,
//     color: colors.light.primary,
//   },
//   datePicker: {height: vh * 20},
// });
// const lightStyles = StyleSheet.create({
//   text: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: vh * 4,
//   },
//   age: {
//     fontSize: vh * 4,
//     color: colors.dark.primary,
//   },
//   poppin: {
//     fontSize: vh * 1.5,
//     color: colors.grey,
//   },
//   datePicker: {height: vh * 20},
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
    text: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: vh * 4,
    },
    age: {
      fontSize: vh * 4,
      color: colors.fontColors.primary,
    },
    poppin: {
      fontSize: vh * 1.5,
      color: colors.grey,
    },
    datePicker: {
      height: vh * 20
    },
  });
  return styles;
};

export default MyStyles;


