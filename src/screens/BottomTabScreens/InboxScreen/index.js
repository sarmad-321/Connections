import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import EmptyLikes from '../../../components/EmptyLikes';
import {images} from '../../../assets';
import ChatList from '../../../components/ChatList';
import {FlatList} from 'react-native-gesture-handler';
import useChatController from '../ChatScreen/useChatController';
import useInboxController from './useInboxController';
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
const InboxScreen = ({navigation}) => {
  const {matches} = useInboxController();

  const handlePress = id => {
    navigation.navigate('Chat', {conversationId: id});
  };
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <ScreenWraper>
      <SafeAreaView>
        {!matches.length ? (
          <>
            <HomeHeader title={'Matches'} />
            <EmptyLikes
              onPress={() => setIsEmpty(false)}
              title={'Matches'}
              image={images.inbox}
            />
          </>
        ) : (
          <>
            <HomeHeader title={'Chats'} />
            <FlatList
              data={matches}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <ChatList
                  name={`${item.user?.firstName} ${item.user?.lastName}`}
                  message={item.message || 'Tap to start a conversation'}
                  time={item.time}
                  new={item.new}
                  onPress={() => handlePress(item?._id)}
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
