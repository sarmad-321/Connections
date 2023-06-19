import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Question from '../../../../components/Question';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../../../assets';
import styles from './styles';
import MainButton from '../../../../components/Buttons/MainButton';

const Step4 = () => {
  return (
    <SafeAreaView>
      <Question step={'04'} text={`Where Do You Live?`} />
      <View style={styles.imgContainer}>
        <ImageBackground source={images.map} style={styles.img}>
          <MainButton style={styles.button} icon={icons.target}>
            Go to Current Location
          </MainButton>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Step4;
