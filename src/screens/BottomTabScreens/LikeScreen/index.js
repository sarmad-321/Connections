import {
  StyleSheet,
  Text,
  Image,
  View,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import {addComment} from '../../../redux/actions/homeActions';
import CommentPopup from '../../../components/Popups/CommentPopup';
import {useDispatch} from 'react-redux';
import {showToast} from '../../../redux/Api/HelperFunction';
import {image_url} from '../../../redux/config';

const LikeScreen = () => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const [isEmpty, setIsEmpty] = useState(true);
  const {matches, myPromptComment, handleReject} = useLikesController();
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const [selectedPrompt, setSelectedPrompt] = useState();
  const [isBlindMode, setIsBlindMode] = useState(false);
  const infoPopup = useRef();
  console.log(matches[0], 'my match');
  const HandleAccept = () => {
    console.log(selectedPrompt, 'selected prompt');
    let selectedProfile = matches[0].user;
    let data = {
      targetType: 'prompt',
      targetUser: selectedProfile._id,
      text: text,
      promptId: selectedPrompt?.selectedPrompt?._id,
      answer: selectedPrompt.answer,
    };
    console.log(data, 'data');
    dispatch(addComment(data)).then(res => {
      infoPopup.current.hide();
    });
  };

  const handlePromptReply = item => {
    setSelectedPrompt(item);
    infoPopup.current.show();
  };

  const handleBlindPress = () => {
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
        <ScrollView
          contentContainerStyle={{paddingBottom: vh * 10}}
          showsVerticalScrollIndicator={false}>
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
                blindonPress={handleBlindPress}
              />

              {myPromptComment.map(item => {
                return (
                  <QuoteCard
                    reply={item.text}
                    answer={item.promptAnswer}
                    question={item?.promptId?.question}
                  />
                );
              })}

              <View style={styles.line} />
              <ProfileCard
                name={`${matches[0].user?.firstName} ${matches[0].user?.lastName}`}
                img={
                  matches[0]?.user?.images?.length > 0
                    ? {uri: image_url + matches[0]?.user?.images[0].path}
                    : images.noImage
                }
              />
              {matches[0]?.user?.promptAnswers?.map(item => {
                return (
                  <QuoteCard
                    answer={item?.answer}
                    question={item?.selectedPrompt?.question}
                    comment
                    onPress={() => handlePromptReply(item)}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
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
      <CommentPopup
        text={setText}
        successTitle={'Add Comment'}
        onAccept={HandleAccept}
        reference={infoPopup}
      />
    </ScreenWraper>
  );
};

export default LikeScreen;
