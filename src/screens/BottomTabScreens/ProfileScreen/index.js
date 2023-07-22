import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../../components/HomeHeader';
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ProfilePic from '../../../components/ProfilePic';
import FranklinMedium from '../../../components/TextWrapper/FranklinMedium';
import Poppins from '../../../components/TextWrapper/Poppins';
import { colors } from '../../../utils/theme';
import InputField from '../../../components/InputField';
import MainButton from '../../../components/Buttons/MainButton';
import MyStyles from './styles';

const ProfileScreen = ({ navigation, route }) => {
  const styles = MyStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const HandlePress = () => {
    navigation.navigate('Edit');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeader title={'My Profile'} />
          <ProfilePic />
          <View style={styles.rosesContainer}>
            <View style={styles.row}>
              <FranklinMedium style={styles.h1}>No. of Roses 🌹</FranklinMedium>
              <FranklinMedium style={styles.h1blue}>( 10 )</FranklinMedium>
            </View>
            <View style={styles.row}>
              <FranklinMedium style={styles.h1}>No. of Hearts ❤</FranklinMedium>
              <FranklinMedium style={styles.h1blue}>( 10 )</FranklinMedium>
            </View>
          </View>
          <TouchableOpacity style={styles.buybutton}>
            <Poppins style={styles.buyMore}>Buy More</Poppins>
          </TouchableOpacity>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>About Yourself</FranklinMedium>
            <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>
              Interest & Hobbies
            </FranklinMedium>
            <Poppins style={styles.h2}>Swimming</Poppins>
            <Poppins style={styles.h2}>Dancing</Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Blind Date</FranklinMedium>
            <View style={{ alignItems: 'flex-start' }}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={colors.light.secondary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
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
            <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Height</FranklinMedium>
            <Poppins style={styles.h2}>182 cm</Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Do exercise?</FranklinMedium>
            <Poppins style={styles.h2}>Active</Poppins>
          </View>
          <View style={styles.verticalpad}>
            <FranklinMedium style={styles.h1}>Education</FranklinMedium>
            <Poppins style={styles.h2}>Masters</Poppins>
          </View>
          <MainButton onPress={HandlePress}>Edit Profile</MainButton>
          <View style={styles.gap}></View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default ProfileScreen;
