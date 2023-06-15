import {View, Text} from 'react-native';
import React from 'react';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
const ScreenWraper = ({children}) => {
  const styles = MyStyles();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWraper;
