import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import MyStyles from './styles';
import {icons} from '../../../assets';
import ProfileCard from '../../../components/ProfileCard';
import ListProfileCard from '../../../components/ListProfileCard';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {vh} from '../../../utils/units';

const HomeScreen = ({navigation}) => {
  const styles = MyStyles();
  let data = [
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
  ];
  const HandlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <HomeHeader title={'Welcome John'} />
        <ScrollView>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={HandlePress} activeOpacity={0.8}>
                <ListProfileCard
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
