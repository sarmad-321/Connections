import { View, Text } from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import { vh, vw } from '../../../utils/units';
import MyStyles from './styles';
import InputField from '../../../components/InputField';

const LoginScreen = ({ navigation }) => {
  const styles = MyStyles();

  const handleContinue = () => {
    navigation.navigate("BottomTabNavigator")
  }
  return (
    <ScreenWraper>
      <View
        style={styles.inputContainer}>
        <FranklinMedium style={styles.h1}>
          What's Your Email Address?
        </FranklinMedium>
      </View>


      <InputField type="email-address" label="Email" />

      <View style={styles.button}>
        <MainButton
          onPress={handleContinue}
        >Continue</MainButton>
      </View>
    </ScreenWraper>
  );
};

export default LoginScreen;
