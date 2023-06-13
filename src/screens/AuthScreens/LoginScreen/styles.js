import {StyleSheet, useColorScheme} from 'react-native';
import {vh} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';

const lightStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 2,
    color: fontColors.light.primary,
    marginTop: vh * 4,
  },
});

const darkStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 2,
    color: fontColors.light.primary,
  },
});

const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};

export default MyStyles;
