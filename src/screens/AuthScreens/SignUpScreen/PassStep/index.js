import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import InputField from '../../../../components/InputField';
import Poppins from '../../../../components/TextWrapper/Poppins';
import styles from './styles';

const PassStep = props => {
  return (
    <SafeAreaView>
      {/* <Text>index</Text> */}
      <Question step={'02'} text={`Create your Password`} />
      <InputField
        secureTextEntry={true}
        onChangeText={props.password}
        label="Enter Password"
      />
    </SafeAreaView>
  );
};

export default PassStep;
