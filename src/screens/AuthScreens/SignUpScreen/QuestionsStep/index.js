import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {FlatList} from 'react-native-gesture-handler';
import {vh, vw} from '../../../../utils/units';
import MyStyles from './styles';
import FranklinMedium from '../../../../components/TextWrapper/FranklinMedium';
import RadioButtonRN from 'radio-buttons-react-native';
import {colors} from '../../../../utils/theme';
import RadioButton from '../../../../components/RadioButton';

const QuestionsStep = ({handleItem}) => {
  const styles = MyStyles();
  const theme = useColorScheme();

  const [drink, setDrink] = useState(false);
  const [exercise, setExercise] = useState(false);
  const data = [
    {
      label: 'Yes',
      value: true,
    },
    {
      label: 'No',
      value: false,
    },
  ];
  const relationshipStatus = [
    {
      label: 'Single',
      value: 'Single',
    },
    {
      label: 'Married',
      value: 'Married',
    },
    {
      label: `Divorced`,
      value: 'Divorced',
    },
  ];
  return (
    <SafeAreaView>
      <Question step={'07'} text={`Some Final Questions`} />

      <View style={styles.verticalpad}>
        {/* <FranklinMedium style={styles.h1}>Do You Exercise?</FranklinMedium> */}

        <RadioButton
          options={relationshipStatus}
          label={'Relationship Status'}
          onChange={value => console.log(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Exercise'}
          onChange={value => console.log(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Drink'}
          onChange={value => console.log(value)}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionsStep;
