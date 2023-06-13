import {View, Text} from 'react-native';
import React from 'react';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
const ScreenWraper = ({children}) => {
  const styles = MyStyles();
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ScreenWraper;
