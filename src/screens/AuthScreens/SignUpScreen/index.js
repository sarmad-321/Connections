import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import PagerView from 'react-native-pager-view';
import Step1 from './Step1';
import Step2 from './Step2';
import NextButton from '../../../components/Buttons/NextButton';
import styles from './styles';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const SignUpScreen = () => {
  const ref = useRef(PagerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleContinue = () => {
    ref.current.setPage(currentIndex + 1);
  };
  const onPageSelected = e => {
    setCurrentIndex(e.nativeEvent.position);
  };
  return (
    <ScreenWraper>
      <PagerView
        style={{flex: 0.9}}
        initialPage={0}
        ref={ref}
        onPageSelected={onPageSelected}>
        <Step1 key="1" />
        <Step2 key="2" />
        <Step3 key="3" />
        <Step4 key="4" />
        <Step5 key="5" />
        <Step6 key="6" />
      </PagerView>
      <View style={styles.nextButton}>
        <NextButton onPress={handleContinue} />
      </View>
    </ScreenWraper>
  );
};

export default SignUpScreen;
