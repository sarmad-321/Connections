import {ScrollView, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState, useEffect} from 'react';
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

const QuestionsStep = ({handleItem, onDataReceived}) => {
  const styles = MyStyles();
  const theme = useColorScheme();
  const [relationship, setRelationShip] = useState();
  const [exercise, setExercise] = useState();
  const [drink, setDrink] = useState();
  const [movies, setMovies] = useState();
  const [videoGames, setVideoGames] = useState();

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
  useEffect(() => {
    onDataReceived({
      drink: drink,
      relationStatus: relationship,
      exercise: exercise,
      watchMovies: movies,
      playVideoGames: videoGames,
    });
  }, [relationship, drink, exercise, movies, videoGames]);

  return (
    <SafeAreaView>
      <Question step={'08'} text={`Some Final Questions`} />

      <ScrollView style={styles.verticalpad}>
        {/* <FranklinMedium style={styles.h1}>Do You Exercise?</FranklinMedium> */}

        <RadioButton
          options={relationshipStatus}
          label={'Relationship Status'}
          onChange={value => setRelationShip(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Exercise'}
          onChange={value => setExercise(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Drink'}
          onChange={value => setDrink(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Watch Movies'}
          onChange={value => setMovies(value)}
        />
        <RadioButton
          options={data}
          label={'Do You Play Video Games'}
          onChange={value => setVideoGames(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionsStep;
