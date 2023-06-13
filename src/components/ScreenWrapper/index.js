import {View, Text} from 'react-native';
import React from 'react';
import MyStyles from './styles';
const ScreenWraper = ({children}) => {
  const styles = MyStyles();
  return <View style={styles.container}>{children}</View>;
};

export default ScreenWraper;
