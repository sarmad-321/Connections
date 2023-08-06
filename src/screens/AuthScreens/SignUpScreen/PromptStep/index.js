import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenWraper from '../../../../components/ScreenWrapper';
import SelectDropDown from '../../../../components/Dropdown';
import AnswerPopup from '../../../../components/AnswerPopup';
import Question from '../../../../components/Question';
import PromptButton from '../../../../components/Buttons/PromptButton';
import MainButton from '../../../../components/Buttons/MainButton';
import usePromptController from './usePromptController';
import {vh} from '../../../../utils/units';

const PromptStep = ({navigation, onDataReceived}) => {
  const {
    prompts,
    handleAnswer,
    dropDownRef,
    answerRef,
    promptList,
    handleClick,
    selectedPrompt,
    onPromptSelection,
  } = usePromptController(onDataReceived);
  console.log(promptList);
  return (
    <SafeAreaView>
      <SelectDropDown
        reference={dropDownRef}
        values={prompts}
        onChangeValue={onPromptSelection}
      />
      <AnswerPopup
        reference={answerRef}
        answerReceived={handleAnswer}
        selectedPrompt={selectedPrompt}
      />
      <Question step={'05'} text={`Write Your Profile Answers`} />
      <PromptButton
        title={promptList[0] ? promptList[0].question : 'Select a prompt'}
        answer={promptList[0] ? promptList[0].answer : 'and write your answer'}
        onPress={handleClick}
      />
      <PromptButton
        title={promptList[1] ? promptList[1].question : 'Select a prompt'}
        answer={promptList[1] ? promptList[1].answer : 'and write your answer'}
        onPress={handleClick}
      />
    </SafeAreaView>
  );
};

export default PromptStep;
