import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import PagerView from 'react-native-pager-view';
import Step1 from './Step1';
import Step2 from './Step2';
import NextButton from '../../../components/Buttons/NextButton';
import styles from './styles';

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
      </PagerView>
      <View style={styles.nextButton}>
        <NextButton onPress={handleContinue} />
      </View>
    </ScreenWraper>
  );
};

export default SignUpScreen;
