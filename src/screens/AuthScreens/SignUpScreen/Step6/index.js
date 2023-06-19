import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';

const Step6 = () => {
  return (
    <SafeAreaView>
      <Question step={'06'} text={`Pair your pictures & videos with prompts`} />
    </SafeAreaView>
  );
};

export default Step6;
