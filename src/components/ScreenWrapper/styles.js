import {vh, vw} from '../../utils/units';

import {StyleSheet, useColorScheme} from 'react-native';
import {colors, fontColors} from '../../utils/theme';

const lightStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.light.primary,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.dark.primary,
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
