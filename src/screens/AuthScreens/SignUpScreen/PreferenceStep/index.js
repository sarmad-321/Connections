import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {FlatList} from 'react-native-gesture-handler';
import {vh, vw} from '../../../../utils/units';
import MyStyles from './styles';

let data = ['Men', 'Women', 'Everyone'];

const PreferenceStep = ({handleItem}) => {
  const styles = MyStyles();

  const [selected, setSelected] = useState();
  const HandlePress = item => {
    // console.log(item);
    setSelected(item);
    handleItem(item);
  };
  return (
    <SafeAreaView>
      <Question step={'04'} text={`Who Do You Want To Date?`} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(item => {
          return (
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
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default PreferenceStep;
