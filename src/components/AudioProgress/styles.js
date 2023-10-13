import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {vh} from '../../utils/units';

const MyStyles = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    slider_style: {
      height: '70%',
      width: '100%',
    },
    thumbStyle: {
      width: vh * 1.5,
      height: vh * 1.5,
    },
    playIcon: {
      height: vh * 4,
      width: vh * 4,
      resizeMode: 'contain',
      tintColor: 'white',
    },
    container: {
      flexDirection: 'row',
    },
  });
  return styles;
};
export default MyStyles;
