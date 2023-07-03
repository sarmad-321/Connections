import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import ProfileDetailScreen from '../../screens/BottomTabScreens/ProfileDetailScreen';
import LikeScreen from '../../screens/BottomTabScreens/LikeScreen';

const LikeNavigator = () => {
  const LikeStack = createStackNavigator();

  return (
    <LikeStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Like">
      <LikeStack.Screen name="Like" component={LikeScreen} />
    </LikeStack.Navigator>
  );
};

export default LikeNavigator;

const styles = StyleSheet.create({});
