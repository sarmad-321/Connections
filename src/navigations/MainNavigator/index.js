import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import AuthNavigator from '../AuthNavigator';
import BottomTabNavigator from '../BottomTabNavigator';
import {darkTheme, lightTheme} from '../../utils/theme';

const RootStack = createStackNavigator();
const MainNavigator = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme == 'dark' ? darkTheme : lightTheme}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthNavigator">
        <RootStack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
