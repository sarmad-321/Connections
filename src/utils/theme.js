import {vh} from './units';

export const colors = {
  grey: '#858585',
  dark: {
    primary: 'black',
    secondary: '#265DC7',
    inputfield1: '#2E2E2E',
    inputfield2: '#5B5B5B',
    btnText: 'white',
  },
  light: {
    primary: 'white',
    secondary: '#265DC7',
    btnText: '#0F0F0F',
  },
};

export const tabActiveIconStyle = {
  marginTop: vh,
  width: vh * 4.2,
  height: vh * 4.2,
  resizeMode: 'contain',
};

export const tabIconStyle = {
  width: vh * 3,
  height: vh * 3,
  resizeMode: 'contain',
};
export const fontColors = {
  light: {
    primary: 'black',
    link: '#55A7E6',
  },
  dark: {
    primary: '#FFFFFF',
    link: '#55A7E6',
  },
};

export const appShadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
export const rowDirection = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};
