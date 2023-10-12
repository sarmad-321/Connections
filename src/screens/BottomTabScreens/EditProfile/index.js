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
const EditProfile = ({navigation}) => {
  const theme = useColorScheme();
  const profile = useSelector(state => state?.profileReducer?.user);
  const [updatedImage, setUpdatedImage] = useState();
  const dispatch = useDispatch();
  const [profileImageId, setProfileImageId] = useState(
    profile.profilePicture?._id,
  );
  const styles = MyStyles();

  const exercise = [
    {
      label: 'Active',
    },
    {
      label: 'Sometimes',
    },
    {
      label: 'Almost never',
    },
  ];
  const education = [
    {
      label: 'Undergraduate degree',
    },
    {
      label: 'Postgraduate',
    },
    {
      label: `Master's`,
    },
    {
      label: `Other`,
    },
  ];
  const drink = [
    {
      label: 'Socially',
    },
    {
      label: 'Never',
    },
    {
      label: `Frequently`,
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
            onEditImagePress={onEditImagePress}
          />

          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>
              Interest & Hobbies
            </FranklinMedium>
            <InputField label={'Swimming'} />
          </View>

          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Mobile Number</FranklinMedium>
            <InputField type="numeric" label="+9* ***********" />
          </View>
          <View pointerEvents="none" style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Email</FranklinMedium>
            <InputField type="email-address" label={profile?.email} />
          </View>
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
              label="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            />
            {/* <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Poppins> */}
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Height</FranklinMedium>
            <RangePicker />
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Do They Exercise?</FranklinMedium>
            <RadioButtonRN
              box={false}
              textStyle={theme == 'dark' ? {color: 'white'} : null}
              circleSize={10}
              activeColor={colors.light.secondary}
              data={exercise}
              selectedBtn={e => console.log(e)}
            />
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Education</FranklinMedium>
            <RadioButtonRN
              box={false}
              textStyle={theme == 'dark' ? {color: 'white'} : null}
              circleSize={10}
              activeColor={colors.light.secondary}
              data={education}
              selectedBtn={e => console.log(e)}
            />
            <InputField multi label="Write Other" />
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Do They drink?</FranklinMedium>
            <RadioButtonRN
              box={false}
              textStyle={theme == 'dark' ? {color: 'white'} : null}
              circleSize={10}
              activeColor={colors.light.secondary}
              data={drink}
              selectedBtn={e => console.log(e)}
            />
          </View>
          <MainButton onPress={onUpdateProfile}>Update</MainButton>
          <View style={styles.gap}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
