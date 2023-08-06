import {StyleSheet} from 'react-native';
import vh from './Units/vh';
import vw from './Units/vw';

// import fonts from '../../../../Assets/fonts';
// import {appTheme} from '../../../../Utils';

const styles = StyleSheet.create({
  modal: {
    height: 100 * vh,
    width: 100 * vw,
  },
  cancelButton: {
    height: 6 * vh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 2.5 * vh,
    textAlign: 'center',
    color: 'red',
    paddingBottom: 4 * vw,
  },
  backDrop: {
    height: 100 * vh,
    width: 100 * vw,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  itemsScroll: {
    flex: 1,
  },
  modalContentContainer: {
    height: 90 * vh,
    width: 100 * vw,
    marginTop: vh * 10,
    backgroundColor: 'white',

    position: 'absolute',
    // top: 12 * vh,
    // left: 10 * vw,
    borderRadius: 3 * vw,
    padding: 2 * vw,
  },
  pickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  Heading: {
    color: '#000000',
    fontSize: 2.5 * vh,
    paddingTop: 2 * vw,
    paddingBottom: 2 * vw,
    textAlign: 'center',
    // fontFamily: fonts.Inter.SemiBold,
  },
  searchInput: {
    width: 90 * vw,
  },
  mainpopupImg: {
    width: 23 * vw,
    height: 14 * vh,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'relative',
    marginTop: -7 * vh,
    zIndex: 9999,
  },
  closeBtn: {
    position: 'absolute',
    right: 2 * vw,
    top: 3.5 * vw,
    height: 6 * vw,
    width: 6 * vw,
    alignItems: 'center',
    zIndex: 999999,
  },

  inputField: {
    width: 90 * vw,
    // fontFamily: fonts.Inter.Regular,
    fontSize: 2.0 * vh,
    color: 'black',
    height: 6 * vh,
  },
});

export default styles;
