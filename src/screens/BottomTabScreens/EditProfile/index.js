import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HomeHeader from '../../../components/HomeHeader';
import ProfilePic from '../../../components/ProfilePic';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import Poppins from '../../../components/TextWrapper/Poppins';
import InputField from '../../../components/InputField';
import {colors} from '../../../utils/theme';
import MainButton from '../../../components/Buttons/MainButton';
import MyStyles from './styles';
import RangePicker from '../../../components/RangePicker';
import RadioButtonRN from 'radio-buttons-react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {calculateAge, getFileExtension} from '../../../utils/helperFunction';
import {uploadImages} from '../../../redux/actions/authActions';
import {
  getProfileDetails,
  updateMyProfile,
} from '../../../redux/actions/profileActions';
import path from 'path';
import RadioButton from '../../../components/RadioButton';
const EditProfile = ({navigation}) => {
  const theme = useColorScheme();
  const profile = useSelector(state => state?.profileReducer?.user);
  const [updatedImage, setUpdatedImage] = useState();

  const [relationship, setRelationShip] = useState();
  const [exercise, setExercise] = useState();
  const [drink, setDrink] = useState();
  const [movies, setMovies] = useState();
  const [videoGames, setVideoGames] = useState();
  const dispatch = useDispatch();
  const [profileImageId, setProfileImageId] = useState(
    profile.profilePicture?._id,
  );
  const styles = MyStyles();

  const data = [
    {
      label: 'Yes',
      value: true,
    },
    {
      label: 'No',
      value: false,
    },
  ];
  const relationshipStatus = [
    {
      label: 'Single',
      value: 'Single',
    },
    {
      label: 'Married',
      value: 'Married',
    },
    {
      label: `Divorced`,
      value: 'Divorced',
    },
  ];
  const onEditImagePress = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      const filePath = image.path;

      const fileExtension = getFileExtension(filePath);
      // Split the filename by "." to get the file extension
      let data = {
        name: `image.${fileExtension}`,
        type: image.mime,
        uri: image.path,
      };
      let uploadImage = [{images: data}];
      let profileImageData = {
        profilePicture: {
          url: image.path,
        },
      };
      setUpdatedImage(profileImageData);
      dispatch(uploadImages(uploadImage, profile._id)).then(res => {
        const imageId = res.images[0];
        setProfileImageId(imageId);
      });
    });
  };

  const onUpdateProfile = () => {
    let data = {
      profilePicture: profileImageId,
    };
    dispatch(updateMyProfile(data)).then(res => {
      console.log(res, 'response of my profile');
      dispatch(getProfileDetails());
      navigation.goBack();
    });
  };

  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeader title={'My Profile'} />
          <ProfilePic
            profile={updatedImage || profile}
            imageUrl={updatedImage ? false : true}
            firstName={profile.firstName}
            lastName={profile?.lastName}
            onEditImagePress={onEditImagePress}
          />

          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Age</FranklinMedium>
            <InputField
              type="numeric"
              label={String(calculateAge(profile?.dateOfBirth))}
            />
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Location</FranklinMedium>
            <InputField
              multi
              editable={false}
              value={profile?.location?.address}
            />
            {/* <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Poppins> */}
          </View>
          {/* <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Height</FranklinMedium>
            <RangePicker />
          </View> */}

          <RadioButton
            options={relationshipStatus}
            label={'Relationship Status'}
            defaultValue={profile?.personalitySchema.personality.relationStatus}
            onChange={value => setRelationShip(value)}
          />
          <RadioButton
            options={data}
            label={'Do You Exercise'}
            defaultValue={profile?.personalitySchema.personality.relationStatus}
            onChange={value => setExercise(value)}
          />
          <RadioButton
            options={data}
            label={'Do You Drink'}
            defaultValue={profile?.personalitySchema.personality.drink}
            onChange={value => setDrink(value)}
          />
          <RadioButton
            options={data}
            label={'Do You Watch Movies'}
            defaultValue={profile?.personalitySchema.personality.watchMovies}
            onChange={value => setMovies(value)}
          />
          <RadioButton
            options={data}
            label={'Do You Play Video Games'}
            defaultValue={profile?.personalitySchema.personality.playVideoGames}
            onChange={value => setVideoGames(value)}
          />

          <MainButton onPress={onUpdateProfile}>Update</MainButton>
          <View style={styles.gap}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
