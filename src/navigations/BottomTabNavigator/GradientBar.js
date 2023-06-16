import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientBar = () => {
  return (
    <View style={{flex: 1,backgroundColor:"red"}}>
      <LinearGradient colors={['red', 'yellow']} />
    </View>
  );
};

export default GradientBar;
