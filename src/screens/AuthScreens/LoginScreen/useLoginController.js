import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleContinue = () => {
    const searchCriteria = type === 'email' ? {email} : {phone};
  };

  return {
    setPhone,
    handleContinue,
    setEmail,
  };
};

export default useLoginController;
