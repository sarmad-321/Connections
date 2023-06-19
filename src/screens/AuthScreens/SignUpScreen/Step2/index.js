import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {colors} from '../../../../utils/theme';
import {vh} from '../../../../utils/units';
import AbhayaLibre from '../../../../components/TextWrapper/AbhayaLibre';
import Poppins from '../../../../components/TextWrapper/Poppins';
import MyStyles from './styles';

const Step2 = () => {
  const styles = MyStyles();
  const [date, setDate] = useState(
    new Date(
      new Date().getFullYear() - 18,
      new Date().getMonth(),
      new Date().getDate(),
    ),
  );
  let age = new Date().getFullYear() - date.getFullYear();
  if (
    new Date().getMonth() < date.getMonth() ||
    (new Date().getMonth() === date.getMonth() &&
      new Date().getDate() < date.getDate())
  ) {
    age--;
  }

  return (
    <SafeAreaView>
      {/* <Text>index</Text> */}
      <Question step={'02'} text={`What’s Your Date Of Birth?`} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <DatePicker
          style={styles.datePicker}
          fadeToColor="none"
          textColor={colors.light.secondary}
          maximumDate={new Date()}
          mode="date"
          date={date}
          onDateChange={setDate}
        />
        <View style={styles.text}>
          <AbhayaLibre style={styles.age}>{age}</AbhayaLibre>
          <Poppins style={styles.poppin}>This can't be changed later</Poppins>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step2;
