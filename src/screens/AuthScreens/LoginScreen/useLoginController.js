import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {userLogin, verifyUser} from '../../../redux/actions/authActions';
import BottomTabNavigator from '../../../navigations/BottomTabNavigator';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
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
        if (res == 200) {
          console.log('navigation');
          CommonActions.reset({
            index: 0,
            routes: [{name: BottomTabNavigator}],
          });
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

  return {
    setPhone,
    handleContinue,
    setEmail,
    setPassword,
    alreadyExist,
  };
};

export default useLoginController;
