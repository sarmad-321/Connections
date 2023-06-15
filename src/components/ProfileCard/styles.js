import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  imageContainer: {
    height: vh * 40,
    resizeMode: 'cover',
    width: '100%',
    marginVertical: vh * 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: vh * 2,
    overflow: 'hidden',
  },
  margin: {
    // margin: vw * 3,
    padding: vh * 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: vh * 14,
  },
  detailsText: {
    flexDirection: 'row',
  },
  icon: {
    tintColor: colors.light.primary,
    resizeMode: 'contain',
    height: '60%',
    alignSelf: 'center',
    width: vh * 2,
  },
  h1: {
    color: colors.light.primary,
    fontSize: vh * 3.5,
  },
  h2: {
    paddingHorizontal: '2%',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: vh * 1.8,
  },
});

export default styles;
