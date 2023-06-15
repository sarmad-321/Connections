import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextHOC from './TextHOC';

const AbhayaLibre = props => {
  return (
    <TextHOC {...props} style={[styles.font, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default AbhayaLibre;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'AbhayaLibre-ExtraBold',
  },
});
