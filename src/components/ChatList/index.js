import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';
import {images} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyStyles from './styles';

const ChatList = props => {
  const styles = MyStyles();
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.8}
      style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.imgContainer}>
          <Image source={images.profileDummy} style={styles.img} />
        </View>
      </View>
      <View style={styles.midSection}>
        <View>
          <FranklinMedium style={styles.h1}>{props.name}</FranklinMedium>
          <Poppins style={styles.h2}>{props.message}</Poppins>
        </View>
        <View>
          <Poppins style={styles.h2}>{props.time}</Poppins>
          {props.new ? (
            <View style={styles.blueContainer}>
              <FranklinMedium style={styles.h3}>{props.new}</FranklinMedium>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatList;
