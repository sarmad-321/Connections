import {StyleSheet, Text, Image, View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import HomeHeader from '../../../components/HomeHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

import EmptyLikes from '../../../components/EmptyLikes';

import QuoteCard from '../../../components/QuoteCard';
import ProfileCard from '../../../components/ProfileCard';
import {vh} from '../../../utils/units';
import SelectButton from '../../../components/Buttons/SelectButton';
import {icons} from '../../../assets';
import MyStyles, {
  darkGradient,
  darkSelectedGradient,
  lightGradient,
  lightSelectedGradient,
} from './styles';

const LikeScreen = () => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isBlindMode, setIsBlindMode] = useState(false);
  const handlePress = () => {
    console.log('test');
    setIsBlindMode(!isBlindMode);
  };
  const gradientcolors =
    theme === 'dark'
      ? isBlindMode
        ? darkSelectedGradient
        : darkGradient
      : isBlindMode
      ? lightSelectedGradient
      : lightGradient;
  return (
    <ScreenWraper>
      <SafeAreaView>
        {isEmpty ? (
          <>
            <HomeHeader title={'Likes You'} />
            <EmptyLikes />
          </>
        ) : (
          <>
            <HomeHeader
              color={gradientcolors}
              isBlindMode={isBlindMode}
              title={'All'}
              back
              blind
              blindonPress={handlePress}
            />

            <QuoteCard
              button
              text={'Lorem Ipsum is simply dummy text of the printing'}
              heading={'Getting Rid of dead bodies'}
            />
            <View style={styles.line} />
            <ProfileCard />
          </>
        )}
      </SafeAreaView>
      {isEmpty ? null : (
        <View style={styles.fixedButtonContainer}>
          <SelectButton
            iconStyle={[styles.fixedIcon, {height: '30%'}]}
            styles={styles.fixedbtn}
            icon={icons.cross}
          />
          <SelectButton
            iconStyle={styles.fixedIcon}
            styles={styles.fixedbtn}
            icon={icons.comment}
          />
        </View>
      )}
    </ScreenWraper>
  );
};

export default LikeScreen;
