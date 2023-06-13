import {vh, vw} from '../../utils/units';

import {StyleSheet} from 'react-native';
import {colors, fontColors} from '../../utils/theme';

const styles = StyleSheet.create({
  input: {
    borderRadius: vw * 3,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    borderWidth: vw * 0.3,
    flexDirection: 'row',
    height: vh * 6.5,
    width: '100%',
    paddingLeft: vw * 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  fieldView: {
    borderRadius: vw * 3,
    // borderColor: colors.border,
    backgroundColor: colors.textFieldColor,
    // borderWidth: vw * 0.3,
    flexDirection: 'row',
    height: vh * 6.5,
    width: '100%',
    paddingLeft: vw * 4,
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: vh * 1.8,
  },
  logo: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
    marginHorizontal: vw * 1,
    tintColor: colors.black,
  },
  label: {
    left: vw * 4,
    marginBottom: vh * 1.5,
    fontSize: vh * 1.8,
  },

  rightIconContainer: {
    width: vw * 10,
    height: vw * 10,
    position: 'absolute',
    right: vw * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    tintColor: 'grey',
  },
  rightIcon2: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
});

export default styles;
