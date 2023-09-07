import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import MyStyles, {darkGradient, lightGradient} from './styles';
import {icons, images} from '../../../assets';
import ProfileCard from '../../../components/ProfileCard';
import ListProfileCard from '../../../components/ListProfileCard';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {vh} from '../../../utils/units';
import useHomeController from './useHomeController';
import {image_url} from '../../../redux/config';

const HomeScreen = ({navigation}) => {
  const theme = useColorScheme();
  const styles = MyStyles();

  const {data, profile} = useHomeController();
  const HandlePress = item => {
    navigation.navigate('Profile', {isBlind: item.anon, item: item});
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <HomeHeader
          title={`Welcome ${profile?.firstName} 💖🥰`}
          color={theme == 'dark' ? darkGradient : lightGradient}
        />
        <ScrollView>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => HandlePress(item)}
                activeOpacity={0.8}>
                <ListProfileCard
                  index={index}
                  img={
                    item?.images?.length
                      ? {
                          uri: image_url + item?.images[0].path,
                        }
                      : images.noImage
                  }
                  name={item.firstName}
                  age={item.age}
                  city={'California'}
                  distance={item.distance}
                />
              </TouchableOpacity>
            )}
          />
          <View style={styles.bottomspace}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default HomeScreen;
