import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';

const lightStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 4,
    color: fontColors.light.primary,
    marginTop: vh * 4,
  },
  inputContainer: {
    marginHorizontal: vw * 5,
    alignSelf: 'center',
  },
});

const darkStyles = StyleSheet.create({
  h1: {
    fontSize: vh * 4,
    width: vw * 60,
    color: fontColors.dark.primary,
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
  inputContainer: {paddingHorizontal: vw * 5, alignSelf: 'center'},
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
