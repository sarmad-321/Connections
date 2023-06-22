import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenWraper from '../../../../components/ScreenWrapper';
import Question from '../../../../components/Question';
import PromptButton from '../../../../components/Buttons/PromptButton';

const Prompt1 = ({navigation}) => {
  const handleClick = () => {
    console.log('test');
    navigation.navigate('Prompt2');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <Question text={`Write Your Profile Answers`} />
        <PromptButton onPress={handleClick} />
        <PromptButton />
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default Prompt1;
