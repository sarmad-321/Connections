import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import MyStyles, { darkGradient, lightGradient } from './styles';
import { icons, images } from '../../../assets';
import ProfileCard from '../../../components/ProfileCard';
import ListProfileCard from '../../../components/ListProfileCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { vh } from '../../../utils/units';

const HomeScreen = ({ navigation }) => {
  const theme = useColorScheme();
  const styles = MyStyles();
  let data = [
    { name: 'Kelvin', image: images.profileDummy, age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY', anon: false },
    { name: 'Saad', image: images.profileDummy2, age: '22', city: 'Karachi', distance: '10 KMS AWAY', anon: false },
    { name: 'Kelvin', image: images.anonProfile, age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY', anon: true },

  ];
  const HandlePress = (item) => {
    navigation.navigate('Profile', { isBlind: item.anon });
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <HomeHeader
          title={'Welcome John 💖🥰'}

          color={theme == 'dark' ? darkGradient : lightGradient}
        />
        <ScrollView>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => HandlePress(item)} activeOpacity={0.8}>
                <ListProfileCard
                  index={index}
                  img={item.image}
                  name={item.name}
                  age={item.age}
                  city={item.city}
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
