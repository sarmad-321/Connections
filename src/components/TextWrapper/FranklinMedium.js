import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextHOC from './TextHOC';

const FranklinMedium = props => {
  return (
    <TextHOC {...props} style={[styles.font, props?.style]}>
      {props.children}
    </TextHOC>
  );
};

export default FranklinMedium;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Franklin Gothic Medium Regular',
  },
});
