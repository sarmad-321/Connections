import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import Question from '../../../../components/Question';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenWraper from '../../../../components/ScreenWrapper';
import { FlatList } from 'react-native-gesture-handler';
import Poppins from '../../../../components/TextWrapper/Poppins';
import MyStyles from './styles';

const Prompt2 = ({ navigation }) => {
  const styles = MyStyles();
  let data = [
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
    { text: 'Lorem Ipsum is simply dummy text of the printing' },
  ];
  const handlePress = () => {
    navigation.navigate('Prompt3');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handlePress}
              style={styles.listContainer}>
              <Poppins style={styles.h1}>{item.text}</Poppins>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default Prompt2;
