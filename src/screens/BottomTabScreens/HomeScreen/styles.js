import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';
export const lightGradient = [colors.light.secondary, colors.light.secondary];
export const darkGradient = ['#5B5B5B', '#2E2E2E'];
const lightStyles = StyleSheet.create({
  header: {
    height: vh * 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomspace: {
    height: vh * 20,
  },
  imgContainer: {
    height: vh * 5,
    width: vh * 5,
    backgroundColor: colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  img: {
    resizeMode: 'contain',
    width: '70%',
    height: '70%',
  },
});

const darkStyles = StyleSheet.create({});

const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};

export default MyStyles;
