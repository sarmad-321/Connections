import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
// import AnimatedSplash from 'react-native-animated-splash';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './src/navigations/MainNavigator';
import {persistor, store} from './src/redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  // useEffect(() => {
  //   AnimatedSplash.hide();
  // }, []);

  const theme = useColorScheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
          />
          <MainNavigator />
          <Toast />
        </View>
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
