import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import MyStyles from './style';
import Poppins from '../TextWrapper/Poppins';

const Question = props => {
  const styles = MyStyles();

  return (
    <View style={styles.inputContainer}>
      {props?.step ? (
        <Poppins style={styles.stepNo}>Step {props.step}/10</Poppins>
      ) : null}
      <FranklinMedium style={styles.h1}>{props.text}</FranklinMedium>
    </View>
  );
};

export default Question;
