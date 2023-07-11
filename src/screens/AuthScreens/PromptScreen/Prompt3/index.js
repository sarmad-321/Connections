import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import ShadowView from '../../../../components/ShadowView/index.js';
import MyStyles from './styles';
import FranklinMedium from '../../../../components/TextWrapper/FranklinMedium';
import Poppins from '../../../../components/TextWrapper/Poppins';
import MainButton from '../../../../components/Buttons/MainButton';
import {vh} from '../../../../utils/units';
import {icons} from '../../../../assets';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../../utils/theme';
import MultiLineTextInput from '../../../../components/MultiLineTextInput';

const Prompt3 = ({navigation}) => {
  const HandlePress = () => {
    navigation.navigate('BottomTabNavigator');
  };

  const theme = useColorScheme();
  const styles = MyStyles();
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <ShadowView dashed>
          <View style={styles.padding}>
            <FranklinMedium style={styles.h1}>
              Do you Agree Or Disagree That?
            </FranklinMedium>
            <MultiLineTextInput
              label={'Lorem Ipsum is simply dummy text of the printing.'}
            />
            {/* <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing.
            </Poppins> */}
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <MainButton
                onPress={HandlePress}
                style={{width: '75%', height: vh * 6, borderRadius: vh * 0.8}}>
                Answer
              </MainButton>
            </View>
          </View>
        </ShadowView>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={icons.endline} style={styles.img} />
      </View>
    </ScreenWraper>
  );
};

export default Prompt3;
