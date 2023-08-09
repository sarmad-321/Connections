import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

const useRegisterController = (LoginMethod, ref, currentIndex) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(
    LoginMethod.type == 'email' ? LoginMethod.email : null,
  );
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preference, setPreference] = useState('');
  const [isBlindDate, setIsBlindDate] = useState('');
  const [promptList, setPromptList] = useState();
  const [finalData, setFinalData] = useState();
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
    if (currentIndex == 6) {
      const filteredPrompt = promptList
        ?.map((item, index) => (item.prompt ? item.prompt : null))
        .filter(item => item !== null);
      const filteredImage = images
        ?.map((item, index) => (item.image ? item.image : null))
        .filter(item => item !== null);

      setFinalData({
        firstname: firstname,
        lastName: lastName,
        email: email,
        dateOfBirth: date,
        ...isBlindDate,
        location: {
          latitude: 24.869096159342195,
          longitude: 67.09766802041518,
        },
        genderPreference: preference,
        promptAnswers: filteredPrompt,
        images: filteredImage,
        isBlindDate: isBlindDate?.blindDating,
        drink: extraQuestions?.drink,
        relationStatus: extraQuestions?.relationStatus,
        exercise: extraQuestions?.exercise,
      });
      // navigation.navigate('PromptScreen');
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
    handleImages,
    setPrompt,
    handleContinue,
  };
};

export default useRegisterController;
