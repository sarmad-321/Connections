import {View, Text} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import {vh, vw} from '../../../utils/units';
import MyStyles from './styles';
import InputField from '../../../components/InputField';
import ProfileCard from '../../../components/ProfileCard';
import ListProfileCard from '../../../components/ListProfileCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../components/Question';

const LoginScreen = ({navigation}) => {
  const styles = MyStyles();

  const handleContinue = () => {
    navigation.navigate('Verification');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <Question text={`What's Your Email Address?`} />

        <InputField type="email-address" label="Email" />

        {/* <ProfileCard /> */}
        {/* <ListProfileCard />
      <ListProfileCard />
      <ListProfileCard /> */}
      </SafeAreaView>
      <View style={styles.button}>
        <MainButton onPress={handleContinue}>Continue</MainButton>
      </View>
    </ScreenWraper>
  );
};

export default LoginScreen;
