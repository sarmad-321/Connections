import React from 'react';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import VerificationScreen from '../../screens/AuthScreens/VerificationScreen';
import SignUpScreen from '../../screens/AuthScreens/SignUpScreen';
import Prompt1 from '../../screens/AuthScreens/PromptScreen/Prompt1';
import Prompt2 from '../../screens/AuthScreens/PromptScreen/Prompt2';
import AuthOptions from '../AuthOptions';
import Prompt3 from '../../screens/AuthScreens/PromptScreen/Prompt3';
import Prompt4 from '../../screens/AuthScreens/PromptScreen/Prompt4';
import WelcomeScreen from '../../screens/AuthScreens/WelcomeScreen';
import SplashScreen from '../../screens/AuthScreens/SplashScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Verification" component={VerificationScreen} />

      {/* signup screen consist of multiple pages */}
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="PromptScreen" component={Prompt1} />
      <AuthStack.Screen
        name="Prompt2"
        options={AuthOptions}
        component={Prompt2}
      />
      <AuthStack.Screen
        name="Prompt3"
        options={AuthOptions}
        component={Prompt3}
      />
      <AuthStack.Screen
        name="Prompt4"
        options={AuthOptions}
        component={Prompt4}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
