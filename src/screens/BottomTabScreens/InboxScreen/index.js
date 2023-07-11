import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import EmptyLikes from '../../../components/EmptyLikes';
import {images} from '../../../assets';
import ChatList from '../../../components/ChatList';
import {FlatList} from 'react-native-gesture-handler';

const InboxScreen = ({navigation}) => {
  const data = [
    {
      name: 'Sarmad',
      message: "Hello! You're pretty! 😊",
      time: '6 hours ago',
      new: '5',
    },
    {
      name: 'Alisa',
      message: 'What you doing today?',
      time: '2 days ago',
      new: '2',
    },
    {name: 'Sarah', message: 'Wake up dude!!!', time: '3 hours ago'},
  ];
  const handlePress = () => {
    navigation.navigate('Chat');
  };
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <ScreenWraper>
      <SafeAreaView>
        {isEmpty ? (
          <>
            <HomeHeader title={'Matches'} />
            <EmptyLikes title={'Matches'} image={images.inbox} />
          </>
        ) : (
          <>
            <HomeHeader title={'Chats'} />
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <ChatList
                  name={item.name}
                  message={item.message}
                  time={item.time}
                  new={item.new}
                  onPress={handlePress}
                />
              )}
            />
          </>
        )}
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default InboxScreen;
