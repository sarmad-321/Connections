import {
  StyleSheet,
  Text,
  Image,
  View,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
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

const LikeScreen = ({route}) => {
  const theme = useColorScheme();
  const styles = MyStyles();
  const matches = route?.params?.currentUser;
  const [isEmpty, setIsEmpty] = useState(true);
  const {myPromptComment, handleReject} = useLikesController(matches);
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const [selectedPrompt, setSelectedPrompt] = useState();
  const [combineData, setCombineData] = useState([]);
  const [isBlindMode, setIsBlindMode] = useState(false);
  const infoPopup = useRef();

  useEffect(() => {
    if (matches?.user) {
      combineFunction(matches.user);
    }
  }, [matches]);
  console.log(myPromptComment, 'my prompt comments');
  const combineFunction = user => {
    console.log(user, 'user123123');
    if (user?.promptAnswers && user?.images?.length) {
      let combinedData = [
        ...user?.promptAnswers?.map(prompt => ({type: 'prompt', data: prompt})),
        ...user?.images?.slice(1)?.map(image => ({type: 'image', data: image})),
      ];
      for (let i = combinedData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedData[i], combinedData[j]] = [combinedData[j], combinedData[i]];
      }
      setCombineData(combinedData);
    }
  };

  const HandleAccept = () => {
    console.log(selectedPrompt, 'selected prompt');
    let selectedProfile = matches.user;
    let data = {
      targetType: 'prompt',
      targetUser: selectedProfile._id,
      text: text,
      promptId: selectedPrompt?.data?.selectedPrompt?._id,
      answer: selectedPrompt?.data?.answer,
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
          {!matches ? (
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
                blind
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
              <View style={styles.line} />
              <View style={styles.line} />

              <ProfileCard
                name={`${matches.user?.firstName} ${matches.user?.lastName}`}
                img={
                  matches?.user?.images?.length > 0
                    ? {uri: image_url + matches?.user?.images[0].path}
                    : images.noImage
                }
              />
              {combineData.map(item => {
                console.log(item);
                return (
                  <>
                    {item?.type == 'prompt' ? (
                      <QuoteCard
                        answer={item?.data?.answer}
                        question={item?.data?.selectedPrompt?.question}
                        comment
                        onPress={() => handlePromptReply(item)}
                      />
                    ) : (
                      <ProfileCard
                        img={
                          matches?.user?.images?.length > 0
                            ? {uri: image_url + item?.data?.path}
                            : images.noImage
                        }
                      />
                    )}
                  </>
                );
              })}
              {/* {matches?.user?.promptAnswers?.map(item => {
                return (
                  <QuoteCard
                    answer={item?.answer}
                    question={item?.selectedPrompt?.question}
                    comment
                    onPress={() => handlePromptReply(item)}
                  />
                );
              })} */}
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
