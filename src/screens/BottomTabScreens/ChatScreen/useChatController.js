import {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform, LayoutAnimation} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {io} from 'socket.io-client';
import {
  getAllMessages,
  sendMessageAction,
} from '../../../redux/actions/chatActions';
import ImagePicker from 'react-native-image-crop-picker';
import {chatImageUpload} from '../../../redux/actions/authActions';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AVModeIOSOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';
import * as RNFS from 'react-native-fs';
import {getFileExtension} from '../../../utils/helperFunction';

const audioRecorderPlayer = new AudioRecorderPlayer();

const useChatController = conversationId => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [convo, setConvo] = useState([]);
  const socket = useRef();
  const user = useSelector(state => state?.profileReducer?.user);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [flag, setFlag] = useState(true);
  const [recordingTime, setRecodingTime] = useState('00:00');
  const [totalSeconds, setTotalSeconds] = useState();
  useEffect(() => {
    startSocket();
    requstAudioPermissions();
    if (flag) {
      getPreviousConvo();
    }
    return () => {
      socket.current.disconnect();
    };
  }, []);

  const requstAudioPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  const getPreviousConvo = () => {
    dispatch(getAllMessages({conversationId})).then(res => {
      console.log(res, 'response of conversation');
      setConvo([...convo, ...res?.messages]);
      setFlag(false);
    });
  };

  const startSocket = () => {
    socket.current = io('http://143.198.64.59');
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
      if (data.sender !== user?._id) {
        setConvo(prev => [data, ...prev]);
      }
    });
  };

  const HandleGallery = id => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      const filePath = image.path;

      const fileExtension = getFileExtension(filePath);
      let data = {
        name: `image.${fileExtension}`,
        type: image.mime,
        uri: image.path,
      };
      let uploadImage = [{images: data}];

      dispatch(chatImageUpload(uploadImage)).then(res => {
        console.log(res, 'response of uploaded images');
        const imageResponse = res.images[0];
        let chatData = {
          conversationId: conversationId,
          sender: user?._id,
          message: message,
          createdAt: new Date(),
          type: 'image',
          image: {
            url: imageResponse.uri,
            id: imageResponse._id,
          },
        };
        senderHandler(chatData);
      });
    });
  };

  const handleSendMessage = () => {
    let data = {
      conversationId: conversationId,
      sender: user?._id,
      message: message,
      type: 'text',
      createdAt: new Date(),
    };
    senderHandler(data);
  };

  const senderHandler = data => {
    setMessage('');
    setConvo(prev => [data, ...prev]);

    socket.current.emit('sendMessage', data);
    dispatch(sendMessageAction(data)).then(res => {
      console.log(res, 'response of message');
    });
  };

  const handleRecording = async () => {
    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
      ios: 'hello.m4a',
      android: `${dirs.CacheDir}/hello.mp3`,
    });

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVModeIOS: AVModeIOSOption.measurement,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const meteringEnabled = false;

    setRecordingStarted(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    if (!recordingStarted) {
      const result = await audioRecorderPlayer.startRecorder(
        path,
        audioSet,
        meteringEnabled,
      );
      audioRecorderPlayer.addRecordBackListener(e => {
        const timeInMilliseconds = e.currentPosition;
        const totalSeconds = Math.floor(timeInMilliseconds / 1000);
        const formattedTime = audioRecorderPlayer.mmss(totalSeconds);
        setTotalSeconds(totalSeconds);
        setRecodingTime(formattedTime);
      });
    } else {
      handleStopRecording();
    }
  };
  const handleStopRecording = async () => {
    setRecordingStarted(false);
    setRecodingTime('00:00');
    audioRecorderPlayer.removeRecordBackListener();
    if (recordingStarted) {
      const result = await audioRecorderPlayer.stopRecorder();
      let recordingUrl = result;
      console.log(recordingUrl);
      let data = {
        name: `hello.mp3`,
        type: Platform.OS == 'android' ? 'audio/mpeg' : 'audio/m4a',
        uri: recordingUrl,
      };
      let uploadImage = [{images: data}];

      dispatch(chatImageUpload(uploadImage)).then(res => {
        const voiceResponse = res.images[0];
        let chatData = {
          conversationId: conversationId,
          sender: user?._id,
          message: message,
          createdAt: new Date(),
          type: 'voice',
          voice: {
            url: voiceResponse.uri,
            id: voiceResponse._id,
            duration: totalSeconds,
          },
        };
        senderHandler(chatData);
      });
      console.log(result, 'recording stop');
    }
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
  };

  const handleVoicePress = async url => {
    console.log(url, 'url to play');
    const msg = await audioRecorderPlayer.startPlayer(url);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition == e.duration) {
        onStopPlay();
      }
    });
  };

  return {
    message,
    convo,
    setMessage,
    handleSendMessage,
    HandleGallery,
    handleRecording,
    recordingStarted,
    onStopPlay,
    handleVoicePress,
    recordingTime,
  };
};

export default useChatController;
