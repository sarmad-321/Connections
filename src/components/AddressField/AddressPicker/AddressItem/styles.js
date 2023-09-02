import {StyleSheet} from 'react-native';
import vw from '../Units/vw';
import vh from '../Units/vh';

// import fonts from '../../../../../Assets/fonts';

export default styles = StyleSheet.create({
  itemContainer: {
    padding: 1 * vw,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    paddingVertical: 2 * vw,
  },
  itemText: {
    color: '#999999',
    fontSize: 2 * vh,
    // fontFamily: fonts.Inter.Medium,
  },
});
