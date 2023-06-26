import {StyleSheet, useColorScheme, Text, View} from 'react-native';
import React from 'react';
import ShadowView from '../ShadowView';
import Poppins from '../TextWrapper/Poppins';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import LikeIcon from '../Buttons/LikeIcon';
import MyStyles, {darkGradient, lightGradient} from './styles';
import {vh} from '../../utils/units';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const QuoteCard = props => {
  const theme = useColorScheme();
  const styles = MyStyles();
  return (
    <View>
      <View style={styles.descContainer}>
        <ShadowView dashed>
          <View style={styles.padding}>
            <View style={styles.textContainer}>
              <Poppins style={styles.text}>{props?.text}</Poppins>
              <AbhayaLibre style={styles.h1}>{props?.heading}</AbhayaLibre>
            </View>
            {props?.like ? (
              <View style={styles.iconContainer}>
                <LikeIcon />
              </View>
            ) : null}
          </View>
        </ShadowView>
      </View>
      {props?.button ? (
        <LinearGradient colors={darkGradient} style={styles.button}>
          <TouchableOpacity>
            <Poppins style={styles.buttontext}>Lorem ipsum</Poppins>
          </TouchableOpacity>
        </LinearGradient>
      ) : null}
    </View>
  );
};

export default QuoteCard;
