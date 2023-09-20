import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ChatHeader from '../../../components/ChatHeader';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import useChatController from './useChatController';
import {useSelector} from 'react-redux';
import {vh} from '../../../utils/units';
import {image_url} from '../../../redux/config';
import moment from 'moment';
import {icons} from '../../../assets';

const ChatScreen = ({route}) => {
  const conversationId = route?.params?.conversationId;
  const user = useSelector(state => state?.profileReducer?.user);
  const scrollRef = useRef();
  const {convo, handleSendMessage, setMessage, message} =
    useChatController(conversationId);

  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? vh * 2 : 0} // Adjust this value as needed
        style={styles.messagesContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current.scrollToEnd({animated: true})
          }
          style={styles.list}
          ListEmptyComponent={() => <Poppins>No Recent Messages</Poppins>}
          data={convo}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            let itemStyle =
              item?.sender !== user?._id ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                <View style={[styles.balloon]}>
                  <Text
                    style={
                      item?.sender == user?._id
                        ? styles.itemsender
                        : styles.itemreceiver
                    }>
                    {item.message}
                  </Text>
                </View>

                <Poppins
                  style={{
                    color: 'white',
                    textAlign: 'right',
                    paddingHorizontal: 10,
                  }}>
                  {moment(item.createdAt).format('hh:mm')}
                </Poppins>
              </View>
            );
          }}
        />

        <View style={styles.chatBox}>
          <TextInput
            onChangeText={event => setMessage(event)}
            style={styles.chatInput}
            value={message}
            placeholder="Write a message"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={handleSendMessage}
              style={styles.sendContainer}></TouchableOpacity>
            <Image source={icons.microphone} style={styles.icon} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
