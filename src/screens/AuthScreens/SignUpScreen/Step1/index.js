import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import InputField from '../../../../components/InputField';
import Poppins from '../../../../components/TextWrapper/Poppins';
import styles from './styles';

const Step1 = (props) => {




  return (
    <SafeAreaView>
      {/* <Text>index</Text> */}
      <Question step={'01'} text={`What’s your Full Name?`} />
      <InputField onChangeText={props.firstName} label="Enter Your First Name" />
      <InputField onChangeText={props.lastName} label="Enter Your Last Name" />
    </SafeAreaView>
  );
};

export default Step1;
