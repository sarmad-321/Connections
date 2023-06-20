import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {vh, vw} from '../../../../utils/units';
import {colors} from '../../../../utils/theme';

const lightStyles = StyleSheet.create({
  button: {
    height: vh * 15,
    borderColor: colors.light.secondary,
    borderWidth: vh * 0.1,
    borderStyle: 'dashed',
    margin: 0,
    marginRight: '1%',
    marginVertical: vh * 1,
  },
  // container: {
  //   width: '100%',
  //   backgroundColor: 'red',
  //   justifyContent: 'space-evenly',
  // },
  icon: {
    tintColor: colors.light.secondary,
  },
  h3: {
    color: 'black',
    fontSize: vh * 2,
  },
  switchDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  img: {
    resizeMode: 'contain',
    height: '60%',
    width: '60%',
  },
  circle: {
    marginHorizontal: vh * 1,
    backgroundColor: colors.light.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 2,
    borderRadius: 100,
    overflow: 'hidden',
    width: vh * 2,
  },
});

const darkStyles = StyleSheet.create({
  button: {
    height: vh * 15,
    borderColor: colors.light.secondary,
    borderWidth: vh * 0.1,
    borderStyle: 'dashed',
    margin: 0,
    marginRight: '1%',
    marginVertical: vh * 1,
  },
  img: {
    resizeMode: 'contain',
    height: '60%',
    width: '60%',
  },
  circle: {
    marginHorizontal: vh * 1,
    backgroundColor: colors.light.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 2,
    borderRadius: 100,
    overflow: 'hidden',
    width: vh * 2,
  },
  // container: {
  //   width: '100%',
  //   justifyContent: 'space-evenly',
  //   backgroundColor: 'red',
  // },

  h3: {
    color: 'white',
    fontSize: vh * 2,
  },
  switchDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};
export default MyStyles;
