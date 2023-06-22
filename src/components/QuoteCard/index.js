import {StyleSheet, useColorScheme, Text, View} from 'react-native';
import React from 'react';
import ShadowView from '../ShadowView';
import Poppins from '../TextWrapper/Poppins';
import AbhayaLibre from '../TextWrapper/AbhayaLibre';
import LikeIcon from '../Buttons/LikeIcon';
import MyStyles from './styles';

const QuoteCard = props => {
  const styles = MyStyles();
  return (
    <View style={styles.descContainer}>
      <ShadowView dashed>
        <View style={styles.padding}>
          <View style={styles.textContainer}>
            <Poppins style={styles.text}>{props?.text}</Poppins>
            <AbhayaLibre style={styles.h1}>{props?.heading}</AbhayaLibre>
          </View>
          <View style={styles.iconContainer}>
            <LikeIcon />
          </View>
        </View>
      </ShadowView>
    </View>
  );
};

export default QuoteCard;
