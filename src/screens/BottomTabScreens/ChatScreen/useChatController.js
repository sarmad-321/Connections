import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {io} from 'socket.io-client';
import {
  getAllMessages,
  sendMessageAction,
} from '../../../redux/actions/chatActions';

const useChatController = conversationId => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const [convo, setConvo] = useState([]);
  const socket = useRef();
  const user = useSelector(state => state?.profileReducer?.user);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    startSocket();
    if (flag) {
      getPreviousConvo();
    }
    return () => {
      socket.current.disconnect();
    };
  }, []);

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
      setConvo(prev => [...prev, data]);
    });
  };
  const handleSendMessage = () => {
    let data = {
      conversationId: conversationId,
      sender: user?._id,
      message: message,
      createdAt: new Date(),
    };
    setMessage('');
    socket.current.emit('sendMessage', data);
    dispatch(sendMessageAction(data)).then(res => {
      console.log(res, 'response of message');
    });
  };

  return {
    message,
    convo,
    setMessage,
    handleSendMessage,
  };
};

export default useChatController;
