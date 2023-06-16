import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';

const Step2 = () => {
  return (
    <SafeAreaView>
      {/* <Text>index</Text> */}
      <Question step={'02'} text={`What’s Your Date Of Birth?`} />
    </SafeAreaView>
  );
};

export default Step2;
