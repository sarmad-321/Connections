import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';
import MainButton from '../Buttons/MainButton';
import MyStyles from './styles';

const EmptyLikes = props => {
  const styles = MyStyles();
  return (
    <View>
      <View style={styles.imgcontainer}>
        <Image source={props?.image} style={styles.img} />
      </View>
      <View style={styles.textBox}>
        <FranklinMedium style={styles.h1}>
          You’re new here! No {props?.title} Yet
        </FranklinMedium>
        <Poppins style={styles.h2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </Poppins>
        <MainButton>Wait for Perfect Match</MainButton>
      </View>
    </View>
  );
};

export default EmptyLikes;
