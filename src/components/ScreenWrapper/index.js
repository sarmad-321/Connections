import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const ScreenWraper = ({children}) => {
  const theme = useColorScheme();
  const styles = MyStyles();
  return (
    <LinearGradient
      style={styles.container}
      colors={
        theme == 'dark' ? ['black', 'black', '#1E1E1E'] : ['white', 'white']
      }>
      {children}
    </LinearGradient>
  );
};

export default ScreenWraper;
