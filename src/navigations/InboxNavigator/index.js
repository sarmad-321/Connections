import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InboxScreen from '../../screens/BottomTabScreens/InboxScreen';
import ChatScreen from '../../screens/BottomTabScreens/ChatScreen';

const InboxNavigator = () => {
  const InboxStack = createStackNavigator();

  return (
    <InboxStack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false}}
      initialRouteName="Inbox">
      <InboxStack.Screen name="Inbox" component={InboxScreen} />
    </InboxStack.Navigator>
  );
};

export default InboxNavigator;

const styles = StyleSheet.create({});
