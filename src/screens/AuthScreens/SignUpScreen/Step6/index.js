import {StyleSheet, Text, View, useColorScheme, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {icons} from '../../../../assets';
import MyStyles from './styles';
import {FlatList, Switch, TouchableOpacity} from 'react-native-gesture-handler';
import FranklinMedium from '../../../../components/TextWrapper/FranklinMedium';
import {colors} from '../../../../utils/theme';
import GeneralPopup from '../../../../components/Popups/GeneralPopup';

const Step6 = () => {
  const styles = MyStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const infoPopup = useRef();
  return (
    <SafeAreaView>
      <Question step={'06'} text={`Pair your pictures & videos with prompts`} />

      <View style={styles.promptContainer}>
        {[1, 2, 3, 4, 5, 6].map(item => {
          return (
            <SelectButton
              icon={icons.plus}
              iconStyle={styles.icon}
              styles={styles.button}
            />
          );
        })}
      </View>
      <View style={styles.switchDetail}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={colors.light.secondary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <FranklinMedium style={styles.h3}>Blind Matching</FranklinMedium>
        <TouchableOpacity
          onPress={() => infoPopup.current.show()}
          activeOpacity={0.7}
          style={styles.circle}>
          <Image source={icons.info} style={styles.img} />
        </TouchableOpacity>
        <GeneralPopup
          reference={infoPopup}
          title={'Title'}
          message={'Test Message..'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Step6;
