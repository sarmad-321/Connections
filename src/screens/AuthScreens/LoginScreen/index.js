import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import MainButton from '../../../components/Buttons/MainButton';
import MyStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../components/Question';
import useLoginController from './useLoginController';
import InputField from '../../../components/InputField';
import {useSelector} from 'react-redux';
import Animated, {FadeInDown} from 'react-native-reanimated';

const LoginScreen = ({navigation, route}) => {
  const receivedData = route.params?.value;
  const styles = MyStyles();
  const {
    phone,
    handleContinue,
    handlePhoneChange,
    setPassword,
    alreadyExist,
    onEmailChange,
  } = useLoginController(receivedData);
  const loading = useSelector(state => state.commonReducer.btnLoader);

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
            onChangeText={onEmailChange}
            type="email-address"
            label="Enter Your Email Address"
          />
        ) : (
          <InputField
            onChangeText={handlePhoneChange}
            value={phone}
            type="numeric"
            label="Enter Your Phone Number"
          />
        )}
        {alreadyExist && (
          <Animated.View entering={FadeInDown.duration(500)}>
            <InputField
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry={true}
              label="Enter Password"
            />
          </Animated.View>
        )}
      </SafeAreaView>
      <View style={styles.button}>
        <MainButton loading={loading} onPress={handleContinue}>
          Continue
        </MainButton>
      </View>
    </ScreenWraper>
  );
};

export default LoginScreen;
