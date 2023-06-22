import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../../utils/units';
import {colors} from '../../../utils/theme';

export default styles = StyleSheet.create({
  descContainer: {
    height: vh * 18,
  },
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
  },
  h1: {
    fontSize: vh * 3,
    color: colors.greyText,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
});
