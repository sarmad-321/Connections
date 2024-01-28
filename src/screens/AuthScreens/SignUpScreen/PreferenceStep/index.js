import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {FlatList} from 'react-native-gesture-handler';
import {vh, vw} from '../../../../utils/units';
import MyStyles from './styles';

let GenderData = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];
let PreferenceData = [
  {label: 'Men', value: 'Male'},
  {label: 'Women', value: 'Female'},
  {label: 'Everyone', value: 'All'},
];
const PreferenceStep = ({handleItem}) => {
  const styles = MyStyles();

  const [genderSelected, setGenderSelected] = useState({});
  const [preferenceSelected, setPreferenceSelected] = useState({});

  useEffect(() => {
    handleItem(genderSelected, preferenceSelected);
  }, [genderSelected, preferenceSelected]);
  return (
    <SafeAreaView>
      <Question step={'04'} text={`What is your gender?`} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {GenderData.map(item => {
          return (
            <SelectButton
              selectedGradient={
                genderSelected.value == item.value
                  ? styles.selectedGradient
                  : styles.gradient
              }
              textStyles={
                genderSelected?.value == item.value ? styles.selectedText : {}
              }
              onPress={() => {
                setGenderSelected(item);
              }}
              text={item.label}
            />
          );
        })}
      </View>

      <Question text={`Who Do You Want To Date?`} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {PreferenceData.map(item => {
          return (
            <SelectButton
              selectedGradient={
                preferenceSelected.value == item.value
                  ? styles.selectedGradient
                  : styles.gradient
              }
              textStyles={
                preferenceSelected?.value == item.value
                  ? styles.selectedText
                  : {}
              }
              onPress={() => {
                setPreferenceSelected(item);
              }}
              text={item.label}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default PreferenceStep;
