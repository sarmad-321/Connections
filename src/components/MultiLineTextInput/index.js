import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../utils/theme';
import {vh} from '../../utils/units';

const MultiLineTextInput = props => {
  const [description, setDescription] = useState('');
  const theme = useColorScheme();

  const handleDescriptionChange = text => {
    setDescription(text);
  };
  return (
    <View>
      <TextInput
        multiline
        numberOfLines={8} // Set the number of lines to display initially
        value={description}
        onChangeText={handleDescriptionChange}
        placeholder={props?.label}
        placeholderTextColor={
          theme == 'dark' ? colors.light.primary : colors.grey
        }
        style={styles.inputstyle}
      />
    </View>
  );
};

export default MultiLineTextInput;

const styles = StyleSheet.create({
  inputstyle: {
    textAlignVertical: 'top',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: vh * 1.5,
    alignContent: 'flex-start',
    // borderWidth: 1,
    // borderColor: '#ccc',
    padding: 10,
    // height: 150, // Set the desired height for the input
  },
});
