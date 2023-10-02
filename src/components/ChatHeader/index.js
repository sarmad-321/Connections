import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyStyles from './styles';

const ChatHeader = ({userObject}) => {
  const styles = MyStyles();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.backContainer}>
          <Image source={icons.back} style={styles.backimg} />
        </TouchableOpacity>
        <View>
          <View style={styles.imgContainer}>
            <Image source={images.profileDummy} style={styles.img} />
          </View>
          <View style={styles.dot}></View>
        </View>
        <View style={styles.textContainer}>
          <FranklinMedium style={styles.h1}>
            {userObject.firstName} {userObject.lastName}
          </FranklinMedium>
          <Poppins style={styles.h2}>Active now</Poppins>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChatHeader;
