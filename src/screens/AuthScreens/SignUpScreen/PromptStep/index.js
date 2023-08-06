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
import {FlatList} from 'react-native-gesture-handler';

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
      {promptList.map((item, index) => {
        return (
          <PromptButton
            title={item.question}
            answer={item.answer}
            onPress={() => handleClick(item.id)}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default PromptStep;
