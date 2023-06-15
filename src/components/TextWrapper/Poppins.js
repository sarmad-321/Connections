import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextHOC from './TextHOC';

const Poppins = props => {
  return (
    <TextHOC {...props} style={[styles.font, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default Poppins;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins-Black',
  },
});
