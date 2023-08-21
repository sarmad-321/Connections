import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import PagerView from 'react-native-pager-view';

import NextButton from '../../../components/Buttons/NextButton';
import styles from './styles';

import {icons} from '../../../assets';

import usePromptController from './PromptStep/usePromptController';
import useRegisterController from './useRegisterController';
import NameStep from './NameStep';
import BirthStep from './BirthStep';
import PreferenceStep from './PreferenceStep';
import LocationStep from './LocationStep';
import PromptStep from './PromptStep';
import QuestionsStep from './QuestionsStep';
import PictureStep from './PictureStep';
import PassStep from './PassStep';

const SignUpScreen = ({navigation, route}) => {
  const LoginMethod = route.params?.value;

  const ref = useRef(PagerView);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPageSelected = e => {
    setCurrentIndex(e.nativeEvent.position);
  };

  const handleBack = () => {
    ref.current.setPage(currentIndex - 1);
    console.log(currentIndex);
  };

  const {
    setFirstName,
    setLastName,
    handleDateSelection,
    handleItem,
    setPrompt,
    handleImages,
    setPassword,
    handleQuestions,
    handleContinue,
  } = useRegisterController(LoginMethod, ref, currentIndex);

  return (
    <ScreenWraper>
      <PagerView
        scrollEnabled={false}
        style={{flex: 0.9}}
        initialPage={0}
        ref={ref}
        onPageSelected={onPageSelected}>
        <NameStep firstName={setFirstName} lastName={setLastName} key="1" />
        <PassStep password={setPassword} key="2" />
        <BirthStep onDateChange={handleDateSelection} key="3" />
        <PreferenceStep handleItem={handleItem} key="4" />
        <LocationStep key="5" />
        {/* <Step5 key="5" /> */}
        <PromptStep onDataReceived={setPrompt} key="6" />
        <PictureStep onDataReceived={handleImages} key="7" />

        <QuestionsStep onDataReceived={handleQuestions} key="8" />
      </PagerView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {currentIndex == 0 ? (
          <View></View>
        ) : (
          <View style={styles.nextButton}>
            <NextButton icon={icons.left} onPress={handleBack} />
          </View>
        )}

        <View style={styles.nextButton}>
          <NextButton icon={icons.next} onPress={handleContinue} />
        </View>
      </View>
    </ScreenWraper>
  );
};

export default SignUpScreen;
