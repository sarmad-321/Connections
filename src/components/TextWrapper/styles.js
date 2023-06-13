import {StyleSheet} from 'react-native';
import {fontColors} from '../../utils/theme';
import {vh} from '../../utils/units';

const lightStyles = StyleSheet.create({
  text: {
    fontSize: vh * 2,
    color: fontColors.light.primary,
  },
});

const darkStyles = StyleSheet.create({
  text: {
    fontSize: vh * 2,
    color: fontColors.dark.primary,
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
