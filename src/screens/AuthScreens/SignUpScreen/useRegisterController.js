import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {userSignUp} from '../../../redux/actions/authActions';

const useRegisterController = (LoginMethod, ref, currentIndex) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(
    LoginMethod.type == 'email' ? LoginMethod.email : null,
  );
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [preference, setPreference] = useState('');
  const [isBlindDate, setIsBlindDate] = useState('');
  const [promptList, setPromptList] = useState();
  const [extraQuestions, setExtraQuestions] = useState();
  const [images, setImages] = useState();
  const [date, setDate] = useState('');
  const handleDateSelection = newDate => {
    console.log(newDate);
    setDate(moment(newDate).format('MM-DD-YYYY'));
  };
  const setPrompt = value => {
    setPromptList(value);
  };
  const handleImages = (value, value2) => {
    setImages(value);
    setIsBlindDate(value2);
  };
  const handleItem = item => {
    setPreference(item);
  };
  const handleQuestions = item => {
    setExtraQuestions(item);
  };
  const handleContinue = () => {
    if (currentIndex == 7) {
      const filteredPrompt = promptList
        ?.map((item, index) => (item.prompt ? item.prompt : null))
        .filter(item => item !== null);
      const filteredImage = images
        ?.map((item, index) => (item.image ? item.image : null))
        .filter(item => item !== null);
      let formData = new FormData();
      formData.append('images', filteredImage);
      formData.append('firstName', firstname);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('dateOfBirth', date);
      formData.append('isBlindDate', isBlindDate?.blindDating);
      formData.append('location', {
        latitude: 24.869096159342195,
        longitude: 67.09766802041518,
      });
      formData.append('genderPreference', preference);
      formData.append('promptAnswer', filteredPrompt);
      formData.append('drink', extraQuestions?.drink);
      formData.append('relationStatus', extraQuestions?.relationStatus);
      formData.append('exercise', extraQuestions?.exercise);
      console.log('FORM DATA++++++++++++++++++++', formData);

      let finalData = {
        firstName: firstname,
        lastName: lastName,
        email: email,
        password: password,
        dateOfBirth: date,
        latitude: 24.869096159342195,
        longitude: 67.09766802041518,
        gender: 'Male',
        promptAnswers: filteredPrompt,
        // images: filteredImage,
        isBlindDate: isBlindDate.blindDating,
        drink: extraQuestions.drink,
        relationStatus: extraQuestions.relationStatus,
        exercise: extraQuestions.exercise,
      };
      // navigation.navigate('PromptScreen');
      console.log('testing::', extraQuestions.drink);
      console.log('STATE DATA++++++++++++++++++++', finalData);
      dispatch(userSignUp(finalData)).then(res => {
        console.log('RESULT::::::::::::::::::::', res);
        console.log(res.message);
        if (res.status) {
        } else {
        }
      });
    }

    ref.current.setPage(currentIndex + 1);
    console.log(currentIndex);
  };

  return {
    setFirstName,
    setLastName,
    setPreference,
    handleDateSelection,
    handleItem,
    handleQuestions,
    setPassword,
    handleImages,
    setPrompt,
    handleContinue,
  };
};

export default useRegisterController;
