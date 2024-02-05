import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import useLikesController from '../LikeScreen/useLikeScreenController';
import {image_url} from '../../../redux/config';
import ListProfileCard from '../../../components/ListProfileCard';
import {images} from '../../../assets';
import HomeHeader from '../../../components/HomeHeader';
import MyStyles from './styles';
import {useSelector} from 'react-redux';

const LikeListScreen = ({navigation}) => {
  const profile = useSelector(state => state?.profileReducer?.user);

  const {matches} = useLikesController();
  const styles = MyStyles();

  const HandlePress = item => {
    navigation.navigate('Like', {currentUser: item});
  };

  return (
    <View style={{paddingTop: '15%'}}>
      <HomeHeader title={'Likes You'} />
      <View style={styles.container}>
        <FlatList
          data={matches}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => HandlePress(item)}
              activeOpacity={0.8}>
              <ListProfileCard
                index={index}
                img={
                  item?.user?.images?.length
                    ? {
                        uri: image_url + item?.user?.images[0].path,
                      }
                    : images.noImage
                }
                name={item.user.firstName}
                age={item.user?.age}
                city={item?.user?.location?.address}
                distance={item.distance}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default LikeListScreen;
