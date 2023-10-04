import {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {io} from 'socket.io-client';
import {
  getAllMessages,
  sendMessageAction,
} from '../../../redux/actions/chatActions';
import ImagePicker from 'react-native-image-crop-picker';
import {chatImageUpload} from '../../../redux/actions/authActions';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();

const useChatController = conversationId => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const [convo, setConvo] = useState([]);
  const socket = useRef();
  const user = useSelector(state => state?.profileReducer?.user);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [flag, setFlag] = useState(true);
  const [recordingData, setRecordingData] = useState();
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
        setConvo(prev => [...prev, data]);
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
      let data = {
        name: `image${new Date()}`,
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
    setConvo(prev => [...prev, data]);

    socket.current.emit('sendMessage', data);
    dispatch(sendMessageAction(data)).then(res => {
      console.log(res, 'response of message');
    });
  };

  const handleStartRecording = async () => {
    setRecordingStarted(true);
    if (!recordingStarted) {
      const result = await audioRecorderPlayer.startRecorder();
      // audioRecorderPlayer.addRecordBackListener(e => {
      //   setRecordingData({
      //     recordSecs: e.currentPosition,
      //     recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      //   });
      //   return;
      // });
      console.log(result, 'recording start');
    }
  };
  console.log(recordingData, 'recording data');
  const handleStopRecording = async () => {
    setRecordingStarted(false);
    if (recordingStarted) {
      const result = await audioRecorderPlayer.stopRecorder();
      // audioRecorderPlayer.removeRecordBackListener();
      // setRecordingData({
      //   recordSecs: 0,
      // });
      console.log(result, 'recording stop');
      onStartPlay();
    }
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg, 'message on start');
    setTimeout(() => {
      onStopPlay();
    }, 6000);
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
  };

  return {
    message,
    convo,
    setMessage,
    handleSendMessage,
    HandleGallery,
    handleStartRecording,
    handleStopRecording,
  };
};

export default useChatController;
