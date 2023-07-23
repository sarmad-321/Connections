import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../../utils/units';

export default styles = StyleSheet.create({
  container: {
    height: vh * 5,
    width: vh * 5,
    borderRadius: vh * 1,
    justifyContent: 'center',
    marginRight: vw * 1,
    alignItems: 'center',
    backgroundColor: '#265DC7',
  },
  icon: {
    resizeMode: 'contain',
    width: '60%',
    height: '60%',
  },
});
