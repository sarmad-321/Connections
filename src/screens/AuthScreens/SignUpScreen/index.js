import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
import { icons } from '../../../assets';

const SignUpScreen = ({ navigation }) => {
  const ref = useRef(PagerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [preference, setPreference] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    console.log(firstname, lastName, date, preference)

  }, [firstname, lastName, date, preference])
  const handleContinue = () => {
    if (currentIndex == 5) {
      console.log('navigating');
      navigation.navigate('PromptScreen');
    }
    ref.current.setPage(currentIndex + 1);
    console.log(currentIndex);
  };
  const onPageSelected = e => {
    setCurrentIndex(e.nativeEvent.position);
  };
  const handleDateSelection = (newDate) => {
    setDate(newDate)
  }
  const handleBack = () => {

    ref.current.setPage(currentIndex - 1);
    console.log(currentIndex);
  };
  const handleItem = (item) => {
    setPreference(item)
  }

  return (
    <ScreenWraper>
      <PagerView
        scrollEnabled={false}
        style={{ flex: 0.9 }}
        initialPage={0}
        ref={ref}
        onPageSelected={onPageSelected}>
        <Step1 firstName={setFirstName} lastName={setLastName} key="1" />
        <Step2 onDateChange={handleDateSelection} key="2" />
        <Step3 handleItem={handleItem} key="3" />
        <Step4 key="4" />
        <Step5 key="5" />
        <Step6 key="6" />
      </PagerView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {
          currentIndex == 0 ? <View></View> :
            <View style={styles.nextButton}>
              <NextButton icon={icons.left} onPress={handleBack} />
            </View>
        }

        <View style={styles.nextButton}>
          <NextButton icon={icons.next} onPress={handleContinue} />
        </View>
      </View>


    </ScreenWraper>
  );
};

export default SignUpScreen;
