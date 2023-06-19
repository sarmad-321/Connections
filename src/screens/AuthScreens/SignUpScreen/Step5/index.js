import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {vh} from '../../../../utils/units';
import styles from './styles';
import {icons} from '../../../../assets';

const Step5 = () => {
  return (
    <SafeAreaView>
      <Question step={'05'} text={`Choose Your Best Photos & Videos`} />
      <SelectButton
        icon={icons.library}
        styles={styles.button}
        text="Choose from Gallery"
      />
      <SelectButton
        icon={icons.camera}
        styles={styles.button}
        text="Camera Roll"
      />
    </SafeAreaView>
  );
};

export default Step5;
