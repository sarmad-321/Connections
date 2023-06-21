import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../../components/InputField';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import MyStyles from './styles';
import OTPTextView from 'react-native-otp-textinput';
import Question from '../../../components/Question';
import LinearGradient from 'react-native-linear-gradient';
import {DarkTheme} from '@react-navigation/native';
import {colors} from '../../../utils/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Poppins from '../../../components/TextWrapper/Poppins';
import MainButton from '../../../components/Buttons/MainButton';

const VerificationScreen = ({navigation}) => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const handleContinue = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScreenWraper>
      <SafeAreaView>
        <Question text={`Enter Your Verification Code`} />

        <OTPTextView
          handleTextChange={verify => console.log(verify)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          inputCount={4}
          offTintColor={
            theme == 'dark' ? colors.dark.primary : colors.light.primary
          }
          tintColor={theme == 'dark' ? colors.grey : colors.light.secondary}
          inputCellLength={1}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.touch}>
          <Poppins style={styles.h3}>Didn't Get a Code</Poppins>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.button}>
        <MainButton onPress={handleContinue}>Verify</MainButton>
      </View>
    </ScreenWraper>
  );
};

export default VerificationScreen;
