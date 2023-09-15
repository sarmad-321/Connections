import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import ChatHeader from '../../../components/ChatHeader';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import useChatController from './useChatController';
import {io} from 'socket.io-client';
import {useSelector} from 'react-redux';

const data = [
  {
    id: 1,
    date: '9:50 am',
    day: '',
    type: 'in',
    message:
      'ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message',
  },
  {
    id: 2,
    date: '9:50 am',
    day: '',
    type: 'out',
    message:
      'ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message',
  },
  {
    id: 3,
    date: '9:50 am',
    day: '',
    type: 'in',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 4,
    date: '9:50 am',
    day: '',
    type: 'in',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 5,
    date: '9:50 am',
    day: '',
    type: 'out',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 6,
    date: '9:50 am',
    day: '',
    type: 'out',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 7,
    date: '9:50 am',
    day: '',
    type: 'in',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 8,
    date: '9:50 am',
    day: '',
    type: 'in',
    message: 'Lorem ipsum dolor sit a met',
  },
  {
    id: 9,
    date: '9:50 am',
    day: '',
    type: 'in',
    message:
      'ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message, ye aj ka pehla lamba message',
  },
];

const ChatScreen = () => {
  const {matches} = useChatController();
  const socket = useRef();
  const user = useSelector(state => state?.profileReducer?.user);

  useEffect(() => {
    startSocket();
  }, []);

  const startSocket = () => {
    socket.current = io('http://10.1.120.123:4000');
    socket.current.on('connect', () => {
      console.log(socket.current.connected, 'connected ?'); // true
      joinRoom();
    });
  };

  const joinRoom = () => {
    socket.current.emit('joinRoom', '15');
    socket.current.on('message', data => {
      console.log(data, 'data recieved from socket.');
    });
  };

  const handleSendMessage = () => {
    socket.current.emit('sendMessage', 'message has been sent');
  };

  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust this value as needed
        style={styles.messagesContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={message => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                <View style={[styles.balloon]}>
                  <Text
                    style={inMessage ? styles.itemsender : styles.itemreceiver}>
                    {item.message}
                  </Text>
                </View>

                {!inMessage && (
                  <Poppins
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {' '}
                    {!inMessage && item.date}
                  </Poppins>
                )}

                {inMessage && (
                  <Poppins
                    style={{
                      color: '#333',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {' '}
                    {inMessage && item.date}{' '}
                  </Poppins>
                )}
              </View>
            );
          }}
        />

        <View style={styles.chatBox}>
          <TextInput style={{width: '80%'}} placeholder="Write a message" />
          <TouchableOpacity
            onPress={handleSendMessage}
            style={styles.sendContainer}></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
