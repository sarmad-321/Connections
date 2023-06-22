import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

export const darkColor = ['#5B5B5B', '#5B5B5B', '#2E2E2E'];
export const lightColor = [colors.light.primary, colors.light.primary];
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: vh * 1,
    overflow: 'hidden',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  dashedcontainer: {
    flex: 1,
    borderWidth: vh * 0.15,
    borderRadius: vh * 1,
    overflow: 'hidden',
    borderColor: colors.light.secondary,
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
});
