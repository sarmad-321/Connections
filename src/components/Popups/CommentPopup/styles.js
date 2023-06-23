import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';

export const lightgradient = ['white', 'white'];
export const darkGradient = ['rgba(156, 152, 152, 1)', '#424242'];
const lightStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    // backgroundColor: colors.light.primary,
    borderRadius: vw * 5,
    // borderWidth: vh * 0.1,
    // borderColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  yesBtn: {
    width: '100%',
    borderColor: colors.light.secondary,
    marginRight: vh * 1,
  },
  noBtn: {
    fontSize: vh * 1.8,
    color: colors.dark.primary,
  },
  checkCircle: {
    width: vh * 18,
    height: vh * 18,
    resizeMode: 'contain',
    marginTop: -vh * 5,
  },
  cancelContainer: {
    height: vh * 5,
  },
  contentContainer: {
    width: vw * 80,
    borderColor: 'green',
    borderRadius: vw * 0.5,

    borderRadius: vw * 5,

    // overflow: 'hidden',
  },
  circle: {
    width: vh * 10,
    height: vh * 10,
    backgroundColor: colors.btnBackground,
    position: 'absolute',
    top: -vh * 5,
    borderRadius: vh * 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: vh * 50,
    resizeMode: 'contain',
  },
  title: {
    color: colors.dark.primary,
    fontSize: vh * 2.8,
    marginTop: vh * 4,
    textAlign: 'center',
  },
  //   marginTop: {
  //     marginTop: vh * 4,
  //   },
  //   message: {
  //     marginTop: vh * 2,
  //     textAlign: 'center',
  //     color: colors.grey,
  //   },
  //   textBtn: {
  //     marginBottom: vh,
  //   },
  //   textStyle: {
  //     borderBottomWidth: 0,
  //   },
});

const darkStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    // backgroundColor: colors.light.primary,
    borderRadius: vw * 5,
    // borderWidth: vh * 0.1,
    // borderColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  yesBtn: {
    width: '100%',
    borderColor: colors.light.secondary,
    marginRight: vh * 1,
  },
  noBtn: {
    fontSize: vh * 1.8,
    color: colors.light.primary,
  },
  checkCircle: {
    width: vh * 18,
    height: vh * 18,
    resizeMode: 'contain',
    marginTop: -vh * 5,
  },
  cancelContainer: {
    height: vh * 5,
  },
  contentContainer: {
    width: vw * 80,
    borderColor: 'green',
    borderRadius: vw * 0.5,

    borderRadius: vw * 5,

    // overflow: 'hidden',
  },
  circle: {
    width: vh * 10,
    height: vh * 10,
    backgroundColor: colors.btnBackground,
    position: 'absolute',
    top: -vh * 5,
    borderRadius: vh * 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: vh * 50,
    resizeMode: 'contain',
  },
  title: {
    color: colors.dark.primary,
    fontSize: vh * 2.8,
    marginTop: vh * 4,
    textAlign: 'center',
  },
  //   marginTop: {
  //     marginTop: vh * 4,
  //   },
  //   message: {
  //     marginTop: vh * 2,
  //     textAlign: 'center',
  //     color: colors.grey,
  //   },
  //   textBtn: {
  //     marginBottom: vh,
  //   },
  //   textStyle: {
  //     borderBottomWidth: 0,
  //   },
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
