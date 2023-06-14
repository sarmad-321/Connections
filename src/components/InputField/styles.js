import { vh, vw } from '../../utils/units';

import { StyleSheet } from 'react-native';
import { colors, fontColors } from '../../utils/theme';

export const darkgradient = ["#2E2E2E", "#2E2E2E", "#2E2E2E", "#5b5b5b42"]
export const lightgradient = ['white', 'white']
const styles = StyleSheet.create({
  input: {
    borderRadius: vw * 2,
    borderColor: colors.border,

    flexDirection: 'row',
    height: vh * 6.5,
    width: '100%',
    paddingLeft: vw * 4,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  bottomshadow: {
    overflow: 'hidden',
    paddingBottom: vh * 0.6,
    paddingHorizontal: vh * 0.1,
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
