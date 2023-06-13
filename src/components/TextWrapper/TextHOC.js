import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default function TextHOC(props) {
  return (
    <Text
      {...props}
      style={[styles.text, props?.style]}
      ellipsizeMode="tail"
      adjustsFontSizeToFit={false}
      allowFontScaling={false}>
      {props.children}
    </Text>
  );
}
