import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../../../utils/units';

export default styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: vh * 1,
    overflow: 'hidden',
  },
  imgContainer: {
    height: vh * 30,
    width: '100%',
  },
  button: {
    width: '90%',
  },
});
