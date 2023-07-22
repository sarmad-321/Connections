import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import InputField from '../../../../components/InputField';
import Poppins from '../../../../components/TextWrapper/Poppins';
import styles from './styles';

const Step1 = () => {
  return (
    <SafeAreaView>
      {/* <Text>index</Text> */}
      <Question step={'01'} text={`What’s your Full Name?`} />
      <InputField label="Enter Your First Name" />
      <InputField label="Enter Your Last Name" />
    </SafeAreaView>
  );
};

export default Step1;
