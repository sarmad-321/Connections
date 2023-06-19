import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    borderRadius: vw * 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: vh * 6.5,
    marginVertical: vh * 2,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: colors.light.secondary,
  },
  icon: {resizeMode: 'contain', width: vh * 5, height: '30%'},
  title: {
    color: colors.light.primary,
    fontSize: vh * 2,
  },
});

export default styles;
