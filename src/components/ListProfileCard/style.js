import { StyleSheet } from 'react-native';
import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';
export const gradient = ['rgba(0,0,0,0) 0', 'black'];
const styles = StyleSheet.create({
  imageContainer: {
    height: vh * 20,

    resizeMode: 'cover',
    width: '100%',
    marginVertical: vh * 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: vh * 2,
    overflow: 'hidden',
  },
  activity: {
    justifyContent: 'flex-end',
  },
  margin: {
    // margin: vw * 3,
    padding: vh * 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  fill: {
    flex: 1,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: vh * 3,
  },
  h2: {
    paddingHorizontal: '2%',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: vh * 1.8,
  },
});

export default styles;
