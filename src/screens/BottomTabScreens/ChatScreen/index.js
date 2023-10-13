import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ChatHeader from '../../../components/ChatHeader';
import {FlatList} from 'react-native-gesture-handler';
import Poppins from '../../../components/TextWrapper/Poppins';
import useChatController from './useChatController';
import {useSelector} from 'react-redux';
import {vh, vw} from '../../../utils/units';
import {image_url} from '../../../redux/config';
import moment from 'moment';
import {icons} from '../../../assets';
import Animated, {BounceIn, FlipInEasyY} from 'react-native-reanimated';
import ImageView from 'react-native-image-viewing';
import MyStyles from './styles';
import AbhayaLibre from '../../../components/TextWrapper/AbhayaLibre';
import {Slider} from '@miblanchard/react-native-slider';
import AudioProgress from '../../../components/AudioProgress';

const ChatScreen = ({route}) => {
  const conversationId = route?.params?.conversationId;
  const styles = MyStyles();

  const userObject = route?.params?.userObject;
  const user = useSelector(state => state?.profileReducer?.user);
  const [images, setImages] = useState({uri: ''});
  const [visible, setIsVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const audioDuration = 30;
  const scrollRef = useRef();

  const {
    convo,
    handleSendMessage,
    handleRecording,
    recordingStarted,
    setMessage,
    onStopPlay,
    HandleGallery,
    handleVoicePress,
    recordingTime,
    message,
  } = useChatController(conversationId);

  const handleImagePress = url => {
    const data = [
      {
        uri: url,
      },
    ];
    setImages(data);
    setIsVisible(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setTimeout(() => {
          scrollListToEnd();
        }, 50);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const scrollListToEnd = () => {
    scrollRef.current.scrollToOffset({offset: 0, animated: true});
  };

  const DateComponent = ({createdAt}) => {
    return (
      <Poppins
        style={{
          color: 'white',
          position: 'absolute',
          right: 2,
          bottom: 2,
        }}>
        {createdAt}
      </Poppins>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ChatHeader userObject={userObject} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? vh * 2 : 0} // Adjust this value as needed
        style={styles.messagesContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          onContentSizeChange={scrollListToEnd}
          style={styles.list}
          ListEmptyComponent={() => <Poppins>No Recent Messages</Poppins>}
          data={convo}
          inverted
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            let itemStyle =
              item?.sender !== user?._id ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {item.type == 'text' && (
                  <>
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
                        position: 'absolute',
                        right: 4,
                        bottom: 2,
                      }}>
                      {moment(item.createdAt).format('hh:mm A')}
                    </Poppins>
                  </>
                )}
                {item.type == 'image' && (
                  <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={() =>
                      handleImagePress(image_url + item?.image?.url)
                    }>
                    <Image
                      source={{uri: image_url + item?.image?.url}}
                      style={{width: vw * 40, height: vh * 20}}
                    />
                    <Poppins
                      style={{
                        color: 'white',
                        position: 'absolute',
                        right: 2,
                        bottom: 2,
                      }}>
                      {moment(item.createdAt).format('hh:mm A')}
                    </Poppins>
                  </TouchableOpacity>
                )}
                {item.type == 'voice' && (
                  <View
                    style={{
                      paddingVertical: vh * 1.5,
                      width: vw * 60,
                      paddingHorizontal: vw * 3,
                    }}>
                    <AudioProgress
                      onStartVoice={() =>
                        handleVoicePress(image_url + item?.voice?.url)
                      }
                      onStopPlay={onStopPlay}
                      duration={item.voiceDuration}
                    />
                    <DateComponent
                      createdAt={moment(item.createdAt).format('hh:mm A')}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />

        <View style={styles.chatBox}>
          {recordingStarted ? (
            <View style={styles.chatContainer}>
              <AbhayaLibre>Recording in progress...</AbhayaLibre>
              <AbhayaLibre>{recordingTime}</AbhayaLibre>
            </View>
          ) : (
            <View style={styles.chatContainer}>
              <TextInput
                onChangeText={event => setMessage(event)}
                style={styles.chatInput}
                value={message}
                placeholder="Write a message"
              />
              <TouchableOpacity onPress={HandleGallery}>
                <Image
                  source={icons.gallery}
                  style={[styles.icon, {tintColor: 'black'}]}
                />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.btnContainer}>
            {recordingStarted ? (
              <TouchableOpacity
                onPress={handleRecording}
                style={styles.sendContainer}>
                <Image
                  entering={BounceIn.duration(500)}
                  source={icons.send}
                  style={styles.icon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={message?.length ? handleSendMessage : handleRecording}
                style={styles.sendContainer}>
                {message.length ? (
                  <Image
                    entering={BounceIn.duration(500)}
                    source={icons.send}
                    style={styles.icon}
                  />
                ) : (
                  <Image
                    entering={BounceIn.duration(500)}
                    source={icons.microphone}
                    style={styles.icon}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
