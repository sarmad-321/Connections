import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import {colors} from '../../utils/theme';
import MyStyles from './styles';
import {useTheme} from '@react-navigation/native';

const RadioButton = ({label, options, onChange}) => {
  const [selectedKey, setSelectedKey] = useState(false);
  const styles = MyStyles();
  const {colors} = useTheme();

  const handlePress = item => {
    setSelectedKey(item.label);
    onChange(item.value);
  };
  console.log(selectedKey, 'lol');
  return (
    <View>
      <FranklinMedium style={styles.h1}>{label}</FranklinMedium>
      {options.map(item => {
        return (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            activeOpacity={0.6}
            style={styles.radioContainer}>
            <View
              style={[
                styles.radioBox,
                selectedKey == item.label && {borderColor: colors.secondary},
              ]}>
              {selectedKey == item.label && <View style={styles.innerCircle} />}
            </View>
            <FranklinMedium style={styles.h2}>{item.label}</FranklinMedium>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButton;
