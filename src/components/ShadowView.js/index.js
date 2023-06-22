import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import styles, {darkColor, lightColor} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const ShadowView = ({children, dashed}) => {
  const theme = useColorScheme();
  const colors = theme === 'dark' ? darkColor : lightColor;

  return (
    <View style={dashed ? styles.dashedcontainer : styles.container}>
      <LinearGradient style={{flex: 1}} colors={colors}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default ShadowView;
