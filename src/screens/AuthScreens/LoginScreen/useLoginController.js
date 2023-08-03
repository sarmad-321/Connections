import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../../redux/actions/authActions';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  const handleContinue = () => {
    const searchCriteria = type === 'Email' ? {email} : {phone};
    dispatch(userLogin(searchCriteria)).then(res => {
      console.log(res, 'response');
    });
  };

  return {
    setPhone,
    handleContinue,
    setEmail,
  };
};

export default useLoginController;
