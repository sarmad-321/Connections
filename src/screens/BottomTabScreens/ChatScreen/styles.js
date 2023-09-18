import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

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
  list: {
    height: vh * 80,
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
    minWidth: vw * 40,
    // flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    padding: 5,
  },
  input: {
    width: vw * 75,
    backgroundColor: colors.ebonyClay,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: vw * 3,
  },
  chatBox: {
    width: vw * 90,
    height: vh * 7,
    borderRadius: vw * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    marginBottom: vh * 2,
  },
  sendContainer: {
    height: vh * 5,
    width: vh * 5,
    borderWidth: 1,
    borderRadius: vh * 5,
  },
});
