import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import Poppins from '../TextWrapper/Poppins';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {image_url} from '../../redux/config';

const ChatHeader = ({userObject}) => {
  const styles = MyStyles();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backContainer}>
          <Image source={icons.back} style={styles.backimg} />
        </TouchableOpacity>
        <View>
          <View style={styles.imgContainer}>
            <Image
              source={
                userObject?.profilePicture?.url
                  ? {
                      uri: image_url + userObject?.profilePicture?.url,
                    }
                  : images.profileDummy
              }
              style={styles.img}
            />
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
