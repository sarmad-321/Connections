import {StyleSheet, useColorScheme} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors, fontColors} from '../../../utils/theme';

const lightStyles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  info: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  roundedTextInput: {
    color: 'black',
    borderRadius: vw * 3,
    borderWidth: vw * 0.3,
    borderBottomWidth: vw * 0.2,
    backgroundColor: 'grey',
    width: vw * 18,
    height: vh * 8,
    marginLeft: 0,

    // marginRight: Platform.OS === 'ios' ? RFValue(10): RFValue(15),
  },
  textInputContainer: {
    width: '100%',
  },
  h3: {
    color: colors.light.secondary,
    fontSize: vh * 1.8,
    textDecorationLine: 'underline',
  },
  touch: {
    paddingVertical: vh * 1,
    alignSelf: 'flex-end',
  },
});

const darkStyles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  info: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  roundedTextInput: {
    color: 'black',
    borderRadius: vw * 3,
    borderWidth: vw * 0.3,

    borderBottomWidth: vw * 0.2,
    backgroundColor: 'grey',
    width: vw * 18,
    height: vh * 8,
    marginLeft: 0,

    // marginRight: Platform.OS === 'ios' ? RFValue(10): RFValue(15),
  },
  textInputContainer: {
    width: '100%',
  },
  touch: {
    paddingVertical: vh * 1,
    alignSelf: 'flex-end',
  },
  h3: {
    color: colors.light.secondary,
    fontSize: vh * 1.8,
    textDecorationLine: 'underline',
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
