import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// import AnimatedSplash from 'react-native-animated-splash';

import MainNavigator from './src/navigations/MainNavigator';

const App = () => {
  // useEffect(() => {
  //   AnimatedSplash.hide();
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
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
