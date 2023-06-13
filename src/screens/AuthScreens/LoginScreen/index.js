import {View, Text} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import {vh} from '../../../utils/units';
import MyStyles from './styles';
import InputField from '../../../components/InputField';

const LoginScreen = () => {
  const styles = MyStyles();
  return (
    <ScreenWraper>
      <FranklinMedium style={styles.h1}>Simple Heading</FranklinMedium>
      <InputField label="Email" />
      <MainButton>Simple Text</MainButton>
    </ScreenWraper>
  );
};

export default LoginScreen;
