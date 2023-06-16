import {View, Text, Image, useColorScheme} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, tabActiveIconStyle, tabIconStyle} from '../../utils/theme';
import {icons} from '../../assets';
import HomeNavigator from '../HomeNavigator';
import MyStyles, {darkTabBar, lightTabBar} from './styles';
import GradientBar from './GradientBar';
import LinearGradient from 'react-native-linear-gradient';

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
                source={focused ? icons.eye_on : icons.eye_off}
                style={
                  focused
                    ? {
                        ...tabActiveIconStyle,
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
