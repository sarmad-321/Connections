import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {userLogin, verifyUser} from '../../../redux/actions/authActions';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('+1');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [alreadyExist, setAlreadyExist] = useState(false);
  const dispatch = useDispatch();

  const handleContinue = () => {
    // navigation.navigate('Verification', searchCriteria);
    if (alreadyExist) {
      const loginData =
        type === 'Email'
          ? {email: email, password: password}
          : {phone: phone, password: password};
      dispatch(userLogin(loginData)).then(res => {
        console.log(res.user?.personalityAnswers, 'data api');
        if (res?.user && !res.user?.personalityAnswers) {
          const searchCriteria =
            type === 'Email' ? {email, type: 'email'} : {phone, type: 'phone'};
          navigation.navigate('SignUp', {
            value: searchCriteria,
            user: res.user,
          });
        }
        if (res == 200) {
          // navigation.navigate('BottomTabNavigator', {
          //   screen: 'Home',
          // });
        }
      });
    } else {
      if (alreadyExist && password.length > 6) {
        return navigation.navigate('Verification', searchCriteria);
      }

      const searchCriteria =
        type === 'Email' ? {email, type: 'email'} : {phone, type: 'phone'};
      dispatch(verifyUser(searchCriteria)).then(res => {
        console.log(res, 'response controller');
        if (res.status) {
          setAlreadyExist(true);
        } else {
          navigation.navigate('Verification', searchCriteria, {value: email});
        }
      });
    }
  };

  const handlePhoneChange = text => {
    if (text.length > 2) {
      setPhone(text);
    }
  };
  return {
    phone,
    handleContinue,
    setEmail,
    setPassword,
    handlePhoneChange,
    alreadyExist,
  };
};

export default useLoginController;
