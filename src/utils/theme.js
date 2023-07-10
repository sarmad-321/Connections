import {vh} from './units';

export const colors = {
  grey: '#858585',
  greyText: 'rgba(15, 15, 15, 0.8)',
  blackheaderbutton: '#202020',
  offwhite: 'rgba(255, 255, 255, 0.8)',
  transparentShade: '#00000066',
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

export const darkTheme = {  
colors : {
  grey: '#858585',
  greyText: 'rgba(15, 15, 15, 0.8)',
  blackheaderbutton: '#202020',
  offwhite: 'rgba(255, 255, 255, 0.8)',
  transparentShade: '#00000066',
  primary: 'black',
  secondary: '#265DC7',
  inputfield1: '#2E2E2E',
  inputfield2: '#5B5B5B',
  btnText: 'white',
  fontColors : {
    primary: '#FFFFFF',
    link: '#55A7E6',
  }
}
}

export  const lightTheme = { 
colors : {
  grey: '#858585',
  greyText: 'rgba(15, 15, 15, 0.8)',
  blackheaderbutton: '#202020',
  offwhite: 'rgba(255, 255, 255, 0.8)',
  transparentShade: '#00000066', 
  primary: 'white',
  secondary: '#265DC7',
  inputfield1: '#2E2E2E',
  inputfield2: '#5B5B5B',
  btnText: '#0F0F0F',
  fontColors : { 
    primary: 'black',
    link: '#55A7E6',
  }
}
}

export const tabActiveIconStyle = {
  marginTop: vh,
  width: vh * 4.2,
  height: vh * 4.2,
  resizeMode: 'contain',

  borderRadius: 100,
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
