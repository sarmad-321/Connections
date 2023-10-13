import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/theme';
import {vh} from '../../../../utils/units';

export default styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: vh * 0,
    borderColor: colors.light.secondary,
    borderWidth: vh * 0.1,
    borderStyle: 'dashed',

    margin: 0,
    marginVertical: vh * 1,
  },
});
