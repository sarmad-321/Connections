import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons, images} from '../../assets';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import MyStyles from './styles';
import {image_url} from '../../redux/config';

const ProfilePic = props => {
  const styles = MyStyles();

  const calculateUrl = () => {
    let url = '';
    if (props.imageUrl) {
      console.log(true);
      url = image_url + props?.profile?.profilePicture.url;
    } else {
      url = props?.profile?.profilePicture.url;
    }
    return url;
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={
              props?.profile?.profilePicture
                ? {
                    uri: calculateUrl(),
                  }
                : images.profileDummy
            }
            style={styles.img}
          />
        </View>
        <TouchableOpacity
          onPress={props?.onEditImagePress}
          activeOpacity={0.7}
          style={styles.blueContainer}>
          <Image source={icons.edit} style={styles.editimg} />
        </TouchableOpacity>
      </View>
      <FranklinMedium style={styles.h1}>
        {props.firstName ? props.firstName : 'loading...'} {props?.lastName}
      </FranklinMedium>
    </View>
  );
};

export default ProfilePic;
