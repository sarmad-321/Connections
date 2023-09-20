import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, appShadow} from '../../../utils/theme';
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
    paddingHorizontal: vw * 3,
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
    // paddingHorizontal: vw * 3,
  },
  chatBox: {
    width: vw * 100,
    height: vh * 10,
    // borderRadius: vw * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingHorizontal: vw * 4,
    borderTopWidth: vh * 0.5,
    borderColor: colors.shadow,
    paddingVertical: vh * 2,
    // ...appShadow,
    // marginBottom: vh * 2,
  },
  sendContainer: {
    height: vh * 5,
    width: vh * 5,
    borderWidth: 1,
    borderRadius: vh * 5,
    marginRight: vw * 2,
  },
  chatInput: {
    width: '70%',
    backgroundColor: colors.chatBox,
    borderRadius: vw * 2,
  },
  icon: {
    width: vh * 3,
    height: vh * 3,
    resizeMode: 'contain',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
