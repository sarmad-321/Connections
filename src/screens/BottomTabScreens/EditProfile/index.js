import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const EditProfile = () => {
  const styles = MyStyles();
  const HandlePress = () => {
    console.log('test');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeader title={'My Profile'} />
          <ProfilePic />

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
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Email</FranklinMedium>
            <InputField type="email-address" label="sarmad@gmail.com" />
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Age</FranklinMedium>
            <InputField type="numeric" label="24" />
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
            <FranklinMedium style={styles.h1}>Do exercise?</FranklinMedium>
            <Poppins style={styles.h2}>Active</Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Education</FranklinMedium>
            <Poppins style={styles.h2}>Masters</Poppins>
          </View>
          <MainButton onPress={HandlePress}>Update</MainButton>
          <View style={styles.gap}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
