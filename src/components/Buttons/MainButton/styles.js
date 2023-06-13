import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    borderRadius: vw * 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    height: vh * 6.5,
    marginVertical: vh * 2,
    overflow: 'hidden',
    backgroundColor: colors.light.secondary,
  },
  title: {
    color: colors.light.btnText,
    fontSize: vh * 2,
  },
});

export default styles;
