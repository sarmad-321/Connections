import {View, Text, Image} from 'react-native';
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

const HomeScreen = () => {
  const styles = MyStyles();
  let data = [
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
    {name: 'Kelvin', age: '23', city: 'LOS ANGELES', distance: '20 KMS AWAY'},
    {name: 'Saad', age: '22', city: 'Karachi', distance: '10 KMS AWAY'},
  ];
  return (
    <ScreenWraper>
      <SafeAreaView>
        <HomeHeader title={'Welcome John'} />
        <ScrollView>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ListProfileCard
                name={item.name}
                age={item.age}
                city={item.city}
                distance={item.distance}
              />
            )}
          />
          <View style={styles.bottomspace}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default HomeScreen;
