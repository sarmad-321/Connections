import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import ProfileDetailScreen from '../../screens/BottomTabScreens/ProfileDetailScreen';
import LikeScreen from '../../screens/BottomTabScreens/LikeScreen';
import LikeListScreen from '../../screens/BottomTabScreens/LikeListScreen';

const LikeNavigator = () => {
  const LikeStack = createStackNavigator();

  return (
    <LikeStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="LikeList">
      <LikeStack.Screen name="LikeList" component={LikeListScreen} />
      <LikeStack.Screen name="Like" component={LikeScreen} />
    </LikeStack.Navigator>
  );
};

export default LikeNavigator;

const styles = StyleSheet.create({});
