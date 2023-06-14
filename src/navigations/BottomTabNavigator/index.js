import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, tabActiveIconStyle, tabIconStyle } from '../../utils/theme';
import { icons } from '../../assets';
import HomeNavigator from '../HomeNavigator';
import MyStyles from './styles';

const BottomTabNavigator = () => {
    const BottomTab = createBottomTabNavigator();
    const styles = MyStyles()
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabStyle,
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabButton, focused && styles.focusedView]}>
                            <Image
                                source={focused ? icons.eye_on : icons.eye_off}
                                style={focused ?
                                    {
                                        ...tabActiveIconStyle,
                                    }
                                    :
                                    {
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
    )
}

export default BottomTabNavigator
