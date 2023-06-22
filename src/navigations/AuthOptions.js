import React from 'react';
import {Image, Text, View, useColorScheme} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FranklinMedium from '../components/TextWrapper/FranklinMedium';
import {vh, vw} from '../utils/units';
import {icons} from '../assets';
import {colors} from '../utils/theme';
import MyStyles from './styles';
const getTitle = {
  Prompt2: 'Select A Prompt',
  Prompt3: 'Select A Prompt',
  Prompt4: 'Write Answer',
};
// const menuRoutes = {
//   Prompt2: 'Prompt2',
//   Prompt3: 'Prompt3',
// };
const titleRoutes = {
  Prompt2: 'Prompt2',
  Prompt3: 'Prompt3',
  Prompt4: 'Prompt4',
};

const AuthOptions = navProps => {
  const theme = useColorScheme;
  return {
    headerTitle: () => renderHeaderTitle(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerTitleAlign: 'center',
    headerShown: true,
    headerLeftContainerStyle: {paddingLeft: 2 * vw},
    headerRightContainerStyle: {paddingRight: 2 * vh},
    // headerStyle: headerStyle(theme),
    // headerBackground: props => HeaderBackground(navProps),
    // headerBackVisible: false,
  };
};

const headerStyle = theme => {
  return theme === 'dark' ? darkHeaderStyle : lightHeaderStyle;
};

const darkHeaderStyle = {
  backgroundColor: 'black',
};

const lightHeaderStyle = {
  backgroundColor: 'white',
};
export const renderHeaderTitle = props => {
  const styles = MyStyles();

  console.log('props: ', props);

  if (titleRoutes[props?.route?.name]) {
    if (
      titleRoutes[props?.route.name] === 'Prompt2' ||
      'Prompt3' ||
      'Prompt4'
    ) {
      return (
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => console.log(getTitle[props.route.name])}>
          <FranklinMedium style={styles.headerText}>
            {getTitle[props.route.name]}
          </FranklinMedium>
        </TouchableOpacity>
      );
    }
  } else if (typeof props === 'string') {
    return <Text style={styles.titleHead}>{props}</Text>;
  } else {
    console.log('failed');
  }
};
const renderHeaderLeft = props => {
  console.log(props.route.name);
  if (titleRoutes[props.route.name]) {
    return <View></View>;
  }
};
const renderHeaderRight = props => {
  const styles = MyStyles();
  if (titleRoutes[props.route.name]) {
    return (
      <TouchableOpacity
        style={styles.closeContainer}
        onPress={() => props.navigation.goBack()}>
        <Image source={icons.cross} style={styles.icon} />
      </TouchableOpacity>
    );
  }
};
export default AuthOptions;
