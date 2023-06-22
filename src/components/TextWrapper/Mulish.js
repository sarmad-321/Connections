import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextHOC from './TextHOC';

const Mulish = props => {
  return (
    <TextHOC {...props} style={[styles.font, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default Mulish;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Mulish-Regular',
  },
});
