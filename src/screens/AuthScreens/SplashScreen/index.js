import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenView = ({navigation}) => {
  const token = useSelector(state => state?.authReducer?.token);
  const user = useSelector(state => state?.profileReducer?.user);
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 2000);
    let validatingTimeout;
    const checkTokenAndNavigate = async () => {
      if (validatingTimeout) {
        clearTimeout(validatingTimeout);
      }

      validatingTimeout = setTimeout(() => {
        if (token && user?.personalityAnswers) {
          navigation.navigate('BottomTabNavigator', {
            screen: 'Home',
          });
        } else {
          navigation.navigate('AuthNavigator', {
            screen: 'Welcome',
          });
        }
        SplashScreen.hide();
      }, 2000);
    };

    checkTokenAndNavigate();

    // Cleanup function to clear the timeout if the component unmounts or if token changes
    return () => {
      if (validatingTimeout) {
        clearTimeout(validatingTimeout);
      }
    };
  }, [token, user]);
  return <View></View>;
};

export default SplashScreenView;

const styles = StyleSheet.create({});
