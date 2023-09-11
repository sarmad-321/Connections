import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';
import {useTheme} from '@react-navigation/native';
export const lightGradient = [colors.light.secondary, colors.light.secondary];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];

const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: vw * 5,
      height: vh * 85,
    },
  });
  return styles;
};

export default MyStyles;
