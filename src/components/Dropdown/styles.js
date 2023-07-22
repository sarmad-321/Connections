import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';

const lightStyles = StyleSheet.create({
  modal: {
    flex: 1,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  field: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: vw * 0.4,
    borderColor: '#ddd',
    height: vh * 7.5,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000061',
    paddingBottom: vh * 5,
  },
  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: vh * 80,
    width: '95%',
  },
  heading: {
    height: vh * 5.5,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingLeft: vw * 2,
    justifyContent: 'center',
  },
  cancel: {
    marginTop: vh * 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: vh * 5.5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  square: {
    width: vh * 2.5,
    height: vh * 2.5,
    borderWidth: vw * 0.4,
    borderRadius: vw * 0.5,
    borderColor: "gray",
    marginLeft: vw * 2,
    marginRight: vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checked: {
    width: '65%',
    height: '65%',
    backgroundColor: "gray",
  },
});
const darkStyles = StyleSheet.create({
  modal: {
    flex: 1,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  field: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: vw * 0.4,
    borderColor: '#ddd',
    height: vh * 7.5,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000061',
    paddingBottom: vh * 5,
  },
  innerContainer: {
    backgroundColor: colors.dark.primary,
    borderRadius: 10,
    height: vh * 80,
    width: '95%',
  },
  heading: {
    height: vh * 5.5,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingLeft: vw * 2,
    justifyContent: 'center',
  },
  cancel: {
    marginTop: vh * 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: vh * 5.5,
    borderRadius: 10,
    backgroundColor: colors.light.secondary,
  },
  square: {
    width: vh * 2.5,
    height: vh * 2.5,
    borderWidth: vw * 0.4,
    borderRadius: vw * 0.5,
    borderColor: "gray",
    marginLeft: vw * 2,
    marginRight: vw * 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checked: {
    width: '65%',
    height: '65%',
    backgroundColor: "gray",
  },
  poppin: {
    color: 'white'
  },
  h1: { fontSize: vh * 1.8, color: "white", textAlign: "center" }
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
