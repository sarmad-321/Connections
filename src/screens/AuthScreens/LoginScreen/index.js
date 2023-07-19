import { View, Text } from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import { vh, vw } from '../../../utils/units';
import MyStyles from './styles';
import InputField from '../../../components/InputField';
import ProfileCard from '../../../components/ProfileCard';
import ListProfileCard from '../../../components/ListProfileCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Question from '../../../components/Question';

const LoginScreen = ({ navigation, route }) => {
  const receivedData = route.params?.value;
  const styles = MyStyles();

  const handleContinue = () => {
    navigation.navigate('Verification');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <Question text={receivedData == "Email" ? `What's Your Email Address?` : `What's Your Phone Number?`} />

        {receivedData == 'Email' ? <InputField type="email-address" label="Enter Your Email Address" /> :
          <InputField type="numeric" label="Enter Your Phone Number" />
        }


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
