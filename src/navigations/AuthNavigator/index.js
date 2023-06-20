import React from 'react';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import VerificationScreen from '../../screens/AuthScreens/VerificationScreen';
import SignUpScreen from '../../screens/AuthScreens/SignUpScreen';
import Prompt1 from '../../screens/AuthScreens/PromptScreen/Prompt1';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Verification" component={VerificationScreen} />

      {/* signup screen consist of multiple pages */}
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="PromptScreen" component={Prompt1} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
