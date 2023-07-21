import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/theme';

export default styles = StyleSheet.create({
  balloon: {
    maxWidth: '90%',
    paddingVertical: '1%',
    paddingHorizontal: '3%',
    borderRadius: 20,
  },
  itemsender: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor: '#212727',
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor: colors.light.secondary,
  },
  itemreceiver: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    // alignSelf: 'flex-start',
    margin: 15,
    fontSize: 12,
    color: 'red',
  },
  item: {
    marginVertical: 5,
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    padding: 5,
  },
});
