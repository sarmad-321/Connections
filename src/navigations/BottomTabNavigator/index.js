import {View, Text, Image, useColorScheme} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, tabActiveIconStyle, tabIconStyle} from '../../utils/theme';
import {icons} from '../../assets';
import HomeNavigator from '../HomeNavigator';
import MyStyles, {darkTabBar, lightTabBar} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import LikeNavigator from '../LikeNavigator';
import InboxNavigator from '../InboxNavigator';
import ProfileScreen from '../../screens/BottomTabScreens/ProfileScreen';
import ProfileNavigator from '../ProfileNavigator';

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  const styles = MyStyles();
  const theme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabStyle,
        tabBarBackground: () => (
          <LinearGradient
            colors={theme == 'dark' ? darkTabBar : lightTabBar}
            style={styles.gradientBar}
          />
        ),
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabButton, focused && styles.focusedView]}>
              <Image
                source={focused ? icons.home : icons.home}
                style={
                  focused
                    ? {
                        ...tabActiveIconStyle,
                        tintColor: colors.dark.secondary,
                      }
                    : {
                        ...tabIconStyle,
                        tintColor: colors.light.primary,
                      }
                }
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="LikeNavigator"
        component={LikeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabButton, focused && styles.focusedView]}>
              <Image
                source={focused ? icons.heart : icons.heart}
                style={
                  focused
                    ? {
                        ...tabActiveIconStyle,
                        tintColor: colors.dark.secondary,
                      }
                    : {
                        ...tabIconStyle,
                        tintColor: colors.light.primary,
                      }
                }
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabButton, focused && styles.focusedView]}>
              <Image
                source={focused ? icons.comment : icons.comment}
                style={
                  focused
                    ? {
                        ...tabActiveIconStyle,
                        tintColor: colors.dark.secondary,
                      }
                    : {
                        ...tabIconStyle,
                        tintColor: colors.light.primary,
                      }
                }
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={[styles.tabButton, focused && styles.focusedView]}>
              <Image
                source={focused ? icons.profile : icons.profile}
                style={
                  focused
                    ? {
                        ...tabActiveIconStyle,
                        tintColor: colors.dark.secondary,
                      }
                    : {
                        ...tabIconStyle,
                        tintColor: colors.light.primary,
                      }
                }
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
