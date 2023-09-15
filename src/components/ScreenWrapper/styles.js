import {vh, vw} from '../../utils/units';

import {StyleSheet, useColorScheme} from 'react-native';
import {colors, fontColors} from '../../utils/theme';

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: vh * 100,
    paddingHorizontal: vw * 5,
    backgroundColor: colors.light.primary,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: vw * 5,
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
