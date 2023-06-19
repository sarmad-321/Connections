import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../utils/units';
import {colors, fontColors} from '../../utils/theme';

const lightStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 4,
    color: fontColors.light.primary,
    width: vw * 60,
    marginTop: vh * 4,
  },

  inputContainer: {
    paddingTop: vh * 5,
    justifyContent: 'flex-end',
    paddingBottom: vh * 1.5,
  },
  stepNo: {
    fontSize: vh * 1.8,
    color: colors.light.secondary,
  },
});

const darkStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 4,
    width: vw * 60,
    color: fontColors.dark.primary,
  },
  inputContainer: {
    paddingTop: vh * 5,
    justifyContent: 'flex-end',
    paddingBottom: vh * 1.5,
  },
  stepNo: {
    fontSize: vh * 1.8,
    color: colors.light.secondary,
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
