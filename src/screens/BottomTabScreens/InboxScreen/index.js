import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import EmptyLikes from '../../../components/EmptyLikes';
import {images} from '../../../assets';
import ChatList from '../../../components/ChatList';

const InboxScreen = () => {
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
            <ChatList
              name={'Sarmad'}
              message={"Hello! You're pretty! 😊"}
              time={'6 hours ago'}
              new={'5'}
            />
            <ChatList
              name={'Alisa'}
              message={'what you doing today?'}
              time={'2 days ago'}
              new={'5'}
            />
            <ChatList
              name={'Sarah'}
              message={'wake up dude!!!!!'}
              time={'6 hours ago'}
            />
          </>
        )}
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default InboxScreen;
