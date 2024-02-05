import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import {colors} from '../../utils/theme';
import MyStyles from './styles';
import {useTheme} from '@react-navigation/native';

const RadioButton = ({label, options, onChange, defaultValue}) => {
  const [selectedKey, setSelectedKey] = useState(defaultValue);
  const styles = MyStyles();
  const {colors} = useTheme();

  const handlePress = item => {
    setSelectedKey(item.value);
    onChange(item.value);
  };

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
                selectedKey == item.value && {borderColor: colors.secondary},
              ]}>
              {selectedKey == item.value && <View style={styles.innerCircle} />}
            </View>
            <FranklinMedium style={styles.h2}>{item.label}</FranklinMedium>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButton;
