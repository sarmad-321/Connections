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
import {icons, images} from '../../../assets';
import MyStyles, {
  darkGradient,
  darkSelectedGradient,
  lightGradient,
  lightSelectedGradient,
} from './styles';
import useLikesController from './useLikeScreenController';

const LikeScreen = () => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const [isEmpty, setIsEmpty] = useState(true);
  const {matches, myPromptComment, handleReject} = useLikesController();
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
        {!matches.length ? (
          <>
            <HomeHeader title={'Likes You'} />
            <EmptyLikes
              title={'Like'}
              onPress={() => {
                setIsEmpty(false);
              }}
              image={images.likes}
            />
          </>
        ) : (
          <>
            <HomeHeader
              color={gradientcolors}
              isBlindMode={isBlindMode}
              title={'All'}
              back
              blind
              handleReject={handleReject}
              blindonPress={handlePress}
            />

            {myPromptComment.map(item => {
              return (
                <QuoteCard
                  button
                  text={'Lorem Ipsum is simply dummy text of the printing'}
                  heading={'Getting Rid of dead bodies'}
                />
              );
            })}
            <View style={styles.line} />
            <ProfileCard
              name={`${matches[0].user?.firstName} ${matches[0].user?.lastName}`}
            />
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
