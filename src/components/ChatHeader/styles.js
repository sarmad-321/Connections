import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

export default styles = StyleSheet.create({
  container: {
    height: vh * 15,
    flexDirection: 'row',
    backgroundColor: '#121414',
    alignItems: 'center',
  },
  imgContainer: {
    height: vh * 6,
    width: vh * 6,
    marginHorizontal: vh * 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dot: {
    height: vh * 1.2,
    width: vh * 1.2,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: colors.light.secondary,
    bottom: vh * 0.3,
    right: vh * 1.2,
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  backimg: {
    resizeMode: 'contain',
    width: '100%',
    height: '70%',
  },
  backContainer: {
    height: vh * 6,
    width: vh * 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    color: colors.light.primary,
    fontSize: vh * 1.8,
  },
  textContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    color: colors.grey,
    fontSize: vh * 1.4,
  },
});
