import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
// import AnimatedSplash from 'react-native-animated-splash';

import MainNavigator from './src/navigations/MainNavigator';

const App = () => {
  // useEffect(() => {
  //   AnimatedSplash.hide();
  // }, []);
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true} 
        barStyle= {theme == "dark" ? "light-content" : "dark-content" } 
        backgroundColor="transparent"
      />
      <MainNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
