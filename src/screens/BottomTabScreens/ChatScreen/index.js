import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ChatHeader from '../../../components/ChatHeader';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import useChatController from './useChatController';
import {io} from 'socket.io-client';
import {useSelector} from 'react-redux';
import {vh} from '../../../utils/units';
import {image_url} from '../../../redux/config';
import moment from 'moment';

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

const ChatScreen = ({route}) => {
  const socket = useRef();
  const conversationId = route?.params?.conversationId;
  const [message, setMessage] = useState();
  const [newMessage, setNewMessage] = useState();
  const [convo, setConvo] = useState([]);
  const user = useSelector(state => state?.profileReducer?.user);
  useEffect(() => {
    startSocket();
    return () => {
      socket.current.disconnect();
    };
  }, []);

  // useEffect(()=> {
  //   if(newMessage) {
  //     setConvo([...message ,])
  //   }
  // },[newMessage])

  const startSocket = () => {
    socket.current = io('http://10.1.120.254:4000');
    socket.current.on('connect', () => {
      console.log(socket.current.connected, 'connected ?'); // true
      joinRoom();
    });
  };

  const joinRoom = () => {
    console.log(conversationId, 'convo id');
    socket.current.emit('joinRoom', conversationId);
    socket.current.on('message', data => {
      console.log(data, 'data recieved from socket.');
      setConvo(prev => [...prev, data]);
    });
  };
  console.log(user, 'profile');
  const handleSendMessage = () => {
    let data = {
      conversationId: conversationId,
      sender: user?._id,
      message: message,
      createdAt: new Date(),
    };
    socket.current.emit('sendMessage', data);
  };

  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? vh * 2 : 0} // Adjust this value as needed
        style={styles.messagesContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
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
                      item?.sender?._id == user?._id
                        ? styles.itemsender
                        : styles.itemreceiver
                    }>
                    {item.message}
                  </Text>
                </View>

                {!item?.sender?._id == user?._id && (
                  <Poppins
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {!item?.sender?._id == user?._id &&
                      moment(item.createdAt).format('mm:ss')}
                  </Poppins>
                )}

                {item?.sender?._id == user?._id && (
                  <Poppins
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {item?.sender?._id == user?._id &&
                      moment(item.createdAt).format('mm:ss')}
                  </Poppins>
                )}
              </View>
            );
          }}
        />

        <View style={styles.chatBox}>
          <TextInput
            onChangeText={event => setMessage(event)}
            style={{width: '80%'}}
            placeholder="Write a message"
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            style={styles.sendContainer}></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
