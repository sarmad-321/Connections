import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh} from '../../utils/units';
import {colors} from '../../utils/theme';

const color = 'rgba(222, 222, 222, 1)';
export default styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: vh * 15,
    width: '100%',
  },
  leftSection: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  midSection: {
    flex: 1,
    borderBottomColor: 'white',
    borderWidth: vh * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    color: 'white',
    fontSize: vh * 2,
  },
  h2: {
    color: color,
    fontSize: vh * 1.6,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  imgContainer: {
    height: vh * 8.6,
    width: vh * 8.6,
    borderRadius: 100,
    overflow: 'hidden',
  },
  h3: {
    color: color,
    fontSize: vh * 1.2,
  },
  img: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  blueContainer: {
    backgroundColor: colors.light.secondary,
    height: vh * 2,
    width: vh * 2,
    borderRadius: 100,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
