import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  completeProfile,
  uploadImages,
  userSignUp,
} from '../../../redux/actions/authActions';
import {showToast} from '../../../redux/Api/HelperFunction';

const useRegisterController = (LoginMethod, ref, currentIndex) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(LoginMethod.email);
  const [phone, setPhone] = useState(LoginMethod.phone);
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [preference, setPreference] = useState('Any');
  const [isBlindDate, setIsBlindDate] = useState('');
  const [promptList, setPromptList] = useState([]);
  const [extraQuestions, setExtraQuestions] = useState();
  const [location, setLocation] = useState();
  const [images, setImages] = useState();
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState();
  const navigation = useNavigation();

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
    const validation = handleFormValidation();
    console.log(validation);
    if (validation) {
      if (currentIndex == 5) {
        handleRegistration();
        return;
      }
      if (currentIndex == 7) {
        handleCompleteProfile();
        return;
      }
      ref.current.setPage(currentIndex + 1);
    }
  };
  const handleFormValidation = () => {
    switch (currentIndex) {
      case 0:
        if (!firstname) {
          showToast('First Name is Required');
          return false;
        }
        break;

      case 1:
        if (password.length < 8) {
          showToast('Password should be at least 8 Characters');
          return false;
        }
        break;

      case 4:
        if (!location) {
          showToast('Location is required');
          return false;
        }
        break;

      case 6:
        if (images.length) {
          handleImageUpload();
          return false;
        }
        break;
      case 7:
        // if (promptList.length < 3) {
        //   showToast('Please provide all prompt answers');
        //   return false;
        // }
        break;

      default:
        break;
    }
    return true;
  };

  const handleRegistration = () => {
    const filteredPrompt = promptList
      ?.map((item, index) => (item.prompt ? item.prompt : null))
      .filter(item => item !== null);

    let finalData = {
      firstName: firstname,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      dateOfBirth: date,
      latitude: location.location.lat,
      longitude: location.location.lng,
      gender: 'Male',
      promptAnswers: filteredPrompt,
      genderPreference: preference,
      isBlindDate: isBlindDate.blindDating,
    };

    console.log('STATE DATA++++++++++++++++++++', finalData);
    dispatch(userSignUp(finalData)).then(res => {
      console.log('RESULT::::::::::::::::::::', res);
      setUserId(res?.user_id);
      ref.current.setPage(currentIndex + 1);
    });
  };

  const handleCompleteProfile = () => {
    let data = {
      user: userId,
      personality: {
        ...extraQuestions,
      },
    };
    dispatch(completeProfile(data)).then(res => {
      console.log(res, 'complete profile');
      navigation.navigate('Welcome');
    });
    console.log(data);
  };
  console.log(userId, 'userid ');
  const handleImageUpload = () => {
    console.log(images, 'handle images');
    let data = [];
    images.forEach(element => {
      let obj = {
        images: element.image,
      };
      data.push(obj, userId);
    });
    dispatch(uploadImages(data, userId)).then(res => {
      console.log(res, 'response of upload images.');
    });
  };

  return {
    setFirstName,
    setLastName,
    setPreference,
    handleDateSelection,
    handleItem,
    handleQuestions,
    setLocation,
    setPassword,
    handleImages,
    setPrompt,
    handleContinue,
  };
};

export default useRegisterController;
