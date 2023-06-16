import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../../utils/units';
import {colors} from '../../../utils/theme';

export default styles = StyleSheet.create({
  container: {
    height: vh * 8,
    width: vh * 8,
    borderRadius: vh * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#265DC7',
  },
  icon: {
    resizeMode: 'contain',
    width: '60%',
    tintColor: colors.light.primary,
    height: '60%',
  },
});
