import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/units';
import {colors} from '../../utils/theme';

export default styles = StyleSheet.create({
  container: {
    height: vh * 4,
    width: vw * 25,
    flexDirection: 'row',
    borderWidth: vh * 0.05,
    borderRadius: vh * 0.8,
    borderColor: 'rgba(38, 93, 199, 1)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(38, 93, 199, 0.2)',
  },
  icon: {
    borderWidth: 1,

    borderRadius: 100,
    borderColor: 'rgba(38, 93, 199, 0.1)',
    tintColor: 'rgba(38, 93, 199, 1)',
    height: vh * 1,
    width: vh * 1,
  },
  h3: {
    color: colors.light.primary,
    fontSize: vh * 1.5,
  },
  dotContainer: {
    width: vh * 1.2,
    height: vh * 1.2,
    borderRadius: 15,
    backgroundColor: '#254072',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: vh * 0.6,
    height: vh * 0.6,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 93, 199, 1)',
  },
});
