import {StyleSheet, Text, View, useColorScheme} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {vh, vw} from '../../utils/units';

const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    h1: {
      color: colors.fontColors.primary,
      fontSize: vh * 2,
      marginBottom: vh * 2,
    },
    radioContainer: {
      flexDirection: 'row',
      marginLeft: vw * 4,
      marginBottom: vh * 1.5,
    },
    innerCircle: {
      width: '60%',
      height: '60%',
      backgroundColor: colors.secondary,
      borderRadius: 100,
    },
    radioBox: {
      borderWidth: vw * 0.3,

      justifyContent: 'center',
      alignItems: 'center',
      marginRight: vh * 1,
      borderColor: colors.border,
      borderRadius: 100,
      width: vh * 2.5,
      height: vh * 2.5,
    },
    h1blue: {
      color: colors.secondary,
    },
    verticalpad: {
      paddingVertical: vh * 1,
    },
  });
  return styles;
};

export default MyStyles;
