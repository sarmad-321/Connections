import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import ProfileDetailScreen from '../../screens/BottomTabScreens/ProfileDetailScreen';
import LikeScreen from '../../screens/BottomTabScreens/LikeScreen';

const LikeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Like">
      <HomeStack.Screen name="Like" component={LikeScreen} />
    </HomeStack.Navigator>
  );
};

export default LikeNavigator;

const styles = StyleSheet.create({});
