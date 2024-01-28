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

const useRegisterController = (LoginMethod, ref, currentIndex, user) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(LoginMethod.email);
  const [phone, setPhone] = useState(LoginMethod.phone);
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [preference, setPreference] = useState('Any');
  const [gender, setGender] = useState();

  const [isBlindDate, setIsBlindDate] = useState('');
  const [promptList, setPromptList] = useState([]);
  const [uploadedImages, setUploadedImages] = useState();
  const [extraQuestions, setExtraQuestions] = useState();
  const [location, setLocation] = useState();
  const [images, setImages] = useState();
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      setUserId(user._id);
    }
  }, [user]);

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
  const handleItem = (gender, preference) => {
    setGender(gender.value);
    setPreference(preference.value);
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
      if (currentIndex == 6) {
        handleImageUpload();
        ref.current.setPage(currentIndex + 1);

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
      address: location.formatted_address,
      gender: gender,
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
      images: uploadedImages,
      personality: {
        ...extraQuestions,
      },
    };
    dispatch(completeProfile(data)).then(res => {
      console.log(res?.token, 'complete profile');
      if (res?.token) {
        navigation.replace('BottomTabNavigator', {
          screen: 'Home',
        });
      }
      // navigation.navigate('Welcome');
    });
    console.log(data);
  };
  console.log(userId, 'userid ');

  const handleImageUpload = () => {
    console.log(images, 'handle images');
    let data = [];
    images.forEach(element => {
      if (element.image) {
        let obj = {
          images: element.image,
        };
        data.push(obj);
      }
    });
    console.log(data);
    dispatch(uploadImages(data, userId)).then(res => {
      setUploadedImages(res.images);
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
    setGender,
  };
};

export default useRegisterController;
