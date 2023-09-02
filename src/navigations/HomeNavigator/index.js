import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import ProfileDetailScreen from '../../screens/BottomTabScreens/ProfileDetailScreen';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <HomeStack.Screen name="MainHome" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
