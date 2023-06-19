import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {FlatList} from 'react-native-gesture-handler';
import {vh, vw} from '../../../../utils/units';
import MyStyles from './styles';

let data = ['Men', 'Women', 'Everyone'];

const Step3 = () => {
  const styles = MyStyles();

  const [selected, setSelected] = useState();
  const HandlePress = item => {
    console.log(item);
    setSelected(item);
  };
  return (
    <SafeAreaView>
      <Question step={'03'} text={`Who Do You Want To Date?`} />
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <SelectButton
            selectedGradient={
              selected == item ? styles.selectedGradient : styles.gradient
            }
            textStyles={selected == item ? styles.selectedText : {}}
            onPress={() => {
              HandlePress(item);
            }}
            text={item}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Step3;
