import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';

const ChatList = props => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.imgContainer}></View>
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
    </View>
  );
};

export default ChatList;
