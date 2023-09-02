import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWraper from '../../../../components/ScreenWrapper';
import Question from '../../../../components/Question';
import PromptButton from '../../../../components/Buttons/PromptButton';
import SelectDropDown from '../../../../components/Dropdown';
import AnswerPopup from '../../../../components/AnswerPopup';
import { staticQuestions } from '../../../../utils/dummyData';
import MainButton from '../../../../components/Buttons/MainButton';
import { vh } from '../../../../utils/units';
import usePromptController from './usePromptController';

const Prompt1 = ({ navigation }) => {
  const dropDownRef = useRef();
  const answerRef = useRef();
  const [selectedPrompt, setSelectedPrompt] = useState()
  const { prompts, promptsReceived } = usePromptController();
  const [promptList, setPromptList] = useState([]);

  const handleClick = () => {
    dropDownRef.current.show();
    // navigation.navigate('Prompt2');
  };
  const onPromptSelection = (value) => {
    setSelectedPrompt(value)
    setTimeout(() => {
      answerRef.current.show()
    }, 400);
  }
  const handleAnswer = (value) => {
    console.log("received", value)
    console.log(selectedPrompt._id)
    setPromptList((prev) => [
      ...prev, { selectedPrompt: selectedPrompt._id, answer: value }
    ])

  }
  useEffect(() => {
    console.log(promptList)
  }, [promptList])
  return (
    <ScreenWraper>
      <SafeAreaView>
        <SelectDropDown reference={dropDownRef} values={prompts} onChangeValue={onPromptSelection} />
        <AnswerPopup reference={answerRef} answerReceived={handleAnswer} selectedPrompt={selectedPrompt} />
        <Question text={`Write Your Profile Answers`} />
        <PromptButton onPress={handleClick} />
        <PromptButton onPress={handleClick} />

      </SafeAreaView>
      <MainButton
        onPress={() => navigation.navigate("BottomTabNavigator")}
        style={{ position: "absolute", bottom: vh * 5 }}>Continue</MainButton>
    </ScreenWraper>
  );
};

export default Prompt1;
