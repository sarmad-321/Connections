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

const SignUpScreen = ({navigation}) => {
  const ref = useRef(PagerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [firstname, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [preference, setPreference] = useState('');
  const [date, setDate] = useState('');

  const handleContinue = () => {
    // if (currentIndex == 5) {
    //   console.log('navigating');
    //   navigation.navigate('PromptScreen');
    // }
    ref.current.setPage(currentIndex + 1);
    console.log(currentIndex);
  };
  const onPageSelected = e => {
    setCurrentIndex(e.nativeEvent.position);
  };
  // const handleDateSelection = (newDate) => {
  //   setDate(newDate)
  // }
  const handleBack = () => {
    ref.current.setPage(currentIndex - 1);
    console.log(currentIndex);
  };
  // const handleItem = (item) => {
  //   setPreference(item)
  // }

  const {
    setFirstName,
    setLastName,
    handleDateSelection,
    handleItem,
    setPrompt,
  } = useRegisterController();

  return (
    <ScreenWraper>
      <PagerView
        scrollEnabled={false}
        style={{flex: 0.9}}
        initialPage={0}
        ref={ref}
        onPageSelected={onPageSelected}>
        <NameStep firstName={setFirstName} lastName={setLastName} key="1" />
        <BirthStep onDateChange={handleDateSelection} key="2" />
        <PreferenceStep handleItem={handleItem} key="3" />
        <LocationStep key="4" />
        {/* <Step5 key="5" /> */}
        <PromptStep onDataReceived={setPrompt} key="7" />
        <PictureStep key="6" />

        <QuestionsStep />
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
