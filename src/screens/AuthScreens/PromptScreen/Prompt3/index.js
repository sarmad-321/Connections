import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../../components/ScreenWrapper';
import ShadowView from '../../../../components/ShadowView.js';
import MyStyles from './styles';
import FranklinMedium from '../../../../components/TextWrapper/FranklinMedium';
import Poppins from '../../../../components/TextWrapper/Poppins';
import MainButton from '../../../../components/Buttons/MainButton';
import {vh} from '../../../../utils/units';
import {icons} from '../../../../assets';

const Prompt3 = ({navigation}) => {
  const HandlePress = () => {
    navigation.navigate('Prompt4');
  };
  const styles = MyStyles();
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <ShadowView dashed>
          <View style={styles.padding}>
            <FranklinMedium style={styles.h1}>
              Do you Agree Or Disagree That?
            </FranklinMedium>
            <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing.
            </Poppins>
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
