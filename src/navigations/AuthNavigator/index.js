import React from 'react';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />

    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
