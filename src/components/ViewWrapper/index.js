import {View, Text} from 'react-native';
import React from 'react';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const ViewWraper = ({children}) => {
  const styles = MyStyles();
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ViewWraper;
