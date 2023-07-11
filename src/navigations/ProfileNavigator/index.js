import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screens/BottomTabScreens/ProfileScreen';
import EditProfile from '../../screens/BottomTabScreens/EditProfile';

const ProfileNavigator = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Edit" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
