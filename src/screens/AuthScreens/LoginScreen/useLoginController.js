import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin, verifyUser } from '../../../redux/actions/authActions';

const useLoginController = type => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [alreadyExist, setAlreadyExist] = useState(false)
  const dispatch = useDispatch();

  const handleContinue = () => {

    if (alreadyExist && password.length > 6) {
      return navigation.navigate("Verification", searchCriteria)
    }

    const searchCriteria = type === 'Email' ? { email, type: "email" } : { phone, type: "phone" };
    dispatch(verifyUser(searchCriteria)).then(res => {
      if (res.status) {
        setAlreadyExist(true)
      } else {
        navigation.navigate("Verification", searchCriteria)
      }
    });
  };

  return {
    setPhone,
    handleContinue,
    setEmail,
    setPassword,
    alreadyExist
  };
};

export default useLoginController;
