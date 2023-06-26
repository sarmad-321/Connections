import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Mulish from '../TextWrapper/Mulish';
import {icons} from '../../assets';
import MyStyles, {darkGradient, lightGradient} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/theme';

const HomeHeader = props => {
  const theme = useColorScheme();
  const handleOnPress = () => {
    if (props?.blindonPress) {
      props.blindonPress();
    }
  };

  const styles = MyStyles();
  return (
    <View style={styles.header}>
      <Mulish style={styles.h1}>{props?.title}</Mulish>
      <View style={styles.row}>
        {props?.blind ? (
          <View style={styles.bottomshadow}>
            <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
              <LinearGradient style={styles.imgContainer} colors={props.color}>
                <Image
                  style={[
                    styles.img,
                    props.isBlindMode
                      ? {tintColor: colors.light.primary}
                      : null,
                  ]}
                  source={icons.blindbutton}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null}
        {props?.back ? (
          <View style={styles.bottomshadow}>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                style={styles.imgContainer}
                colors={theme == 'dark' ? darkGradient : lightGradient}>
                <Image style={styles.img} source={icons.goBack} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default HomeHeader;
