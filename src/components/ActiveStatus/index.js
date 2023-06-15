import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../assets';

const ActiveStatus = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={icons.dot} style={styles.icon} /> */}
      <View style={styles.dotContainer}>
        <View style={styles.dot} />
      </View>
      <Text style={styles.h3}>Active Now</Text>
    </View>
  );
};

export default ActiveStatus;
