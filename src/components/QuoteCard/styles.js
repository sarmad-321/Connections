import { StyleSheet, useColorScheme, Text, View } from 'react-native';
import React from 'react';
import { vh } from '../../utils/units';
import { colors } from '../../utils/theme';

export const darkGradient = ['#5B5B5B', colors.light.secondary];
export const lightGradient = [colors.light.primary, colors.light.secondary];
const lightStyles = StyleSheet.create({
  descContainer: {
    height: vh * 18,
    marginBottom: vh * 2
  },
  buttontext: { fontSize: vh * 1.4, color: colors.light.primary },
  textContainer: {
    width: '75%',
  },
  padding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4%',
  },
  text: {
    fontSize: vh * 1.6,
    color: colors.greyText,
  },
  h1: {
    fontSize: vh * 3,
    color: colors.dark.primary,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    paddingLeft: vh * 0.5,
    justifyContent: 'center',
    backgroundColor: 'green',
    position: 'absolute',
    height: vh * 4,
    width: '30%',
    borderTopRightRadius: vh * 1,
    borderBottomRightRadius: vh * 1,
    bottom: -vh * 2,
  },
});

const darkStyles = StyleSheet.create({
  buttontext: { fontSize: vh * 1.4, color: colors.light.primary },

  descContainer: {
    height: vh * 18,
    marginBottom: vh * 2

  },
  textContainer: {
    width: '75%',
  },
  padding: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: '4%',
  },
  text: {
    fontSize: vh * 1.6,
    color: colors.offwhite,
  },
  h1: {
    fontSize: vh * 3,
    color: colors.light.primary,
  },
  iconContainer: {
    height: '100%',
    width: '25%',

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    paddingLeft: vh * 0.5,
    justifyContent: 'center',
    backgroundColor: 'green',
    position: 'absolute',
    height: vh * 4,
    width: '30%',
    borderTopRightRadius: vh * 1,
    borderBottomRightRadius: vh * 1,
    bottom: -vh * 2,
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
