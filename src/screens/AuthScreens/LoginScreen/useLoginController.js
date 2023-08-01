import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();

  useEffect(() => {
    console.log(type);
    console.log(phone);
  }, [phone]);

  const handleContinue = () => {
    navigation.navigate('Verification');
  };

  return {
    setPhone,
    handleContinue,
  };
};

export default useLoginController;
