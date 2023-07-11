import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatHeader from '../../../components/ChatHeader';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';

const ChatScreen = () => {
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
  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <ScreenWraper>
        <FlatList
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
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {' '}
                    {!inMessage && item.date}
                  </Text>
                )}

                {inMessage && (
                  <Text
                    style={{
                      color: '#333',
                      textAlign: 'right',
                      paddingHorizontal: 10,
                    }}>
                    {' '}
                    {inMessage && item.date}{' '}
                  </Text>
                )}
              </View>
            );
          }}
        />
      </ScreenWraper>
    </View>
  );
};

export default ChatScreen;
