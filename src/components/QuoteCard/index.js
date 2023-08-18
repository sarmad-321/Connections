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
import Animated, {SlideInLeft, SlideInRight} from 'react-native-reanimated';
import TextIcon from '../Buttons/TextIcon';

const QuoteCard = props => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <Animated.View
      entering={
        props.item % 2 == 0
          ? SlideInLeft.duration((props.index + 1) * 300)
          : SlideInRight.duration((props.index + 1) * 300)
      }>
      <View style={styles.descContainer}>
        <ShadowView dashed>
          <View style={styles.padding}>
            <View style={styles.textContainer}>
              <Poppins style={styles.text}>{props?.text}</Poppins>
              <AbhayaLibre style={styles.h1}>{props?.heading}</AbhayaLibre>
            </View>
            {props?.comment ? (
              <View style={styles.iconContainer}>
                <TextIcon onPress={handleOnPress} />
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
    </Animated.View>
  );
};

export default QuoteCard;
