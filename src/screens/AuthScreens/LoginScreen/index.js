import {View, Text} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../components/Question';
import useLoginController from './useLoginController';
import InputField from '../../../components/InputField';

const LoginScreen = ({navigation, route}) => {
  const receivedData = route.params?.value;
  const styles = MyStyles();
  const {setPhone, handleContinue, setEmail} = useLoginController(receivedData);

  return (
    <ScreenWraper>
      <SafeAreaView>
        <Question
          text={
            receivedData == 'Email'
              ? `What's Your Email Address?`
              : `What's Your Phone Number?`
          }
        />
        {receivedData == 'Email' ? (
          <InputField
            onChangeText={setEmail}
            type="email-address"
            label="Enter Your Email Address"
          />
        ) : (
          <InputField
            onChangeText={setPhone}
            type="numeric"
            label="Enter Your Phone Number"
          />
        )}
      </SafeAreaView>
      <View style={styles.button}>
        <MainButton onPress={handleContinue}>Continue</MainButton>
      </View>
    </ScreenWraper>
  );
};

export default LoginScreen;
