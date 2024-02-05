import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCard from '../../../components/ProfileCard';
import ShadowView from '../../../components/ShadowView';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import AbhayaLibre from '../../../components/TextWrapper/AbhayaLibre';
import LikeIcon from '../../../components/Buttons/LikeIcon';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import QuoteCard from '../../../components/QuoteCard';
import InfoCard from '../../../components/InfoCard';
import CommentPopup from '../../../components/Popups/CommentPopup';
import {addComment} from '../../../redux/actions/homeActions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../../redux/Api/HelperFunction';
import {image_url} from '../../../redux/config';
import {vh} from '../../../utils/units';
import {images} from '../../../assets';

const ProfileDetailScreen = ({route}) => {
  const selectedProfile = route.params?.item;
  const prompt = route.params?.item?.promptAnswers;
  const dispatch = useDispatch();
  const infoPopup = useRef();
  const [text, setText] = useState();
  const [selectedPrompt, setSelectedPrompt] = useState();
  const [combineData, setCombineData] = useState([]);

  useEffect(() => {
    if (selectedProfile) {
      combineFunction(selectedProfile);
    }
  }, [selectedProfile]);

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

  const HandlePress = item => {
    setSelectedPrompt(item);
    infoPopup.current.show();
  };
  const HandleAccept = () => {
    console.log(text);
    console.log(selectedPrompt, 'selected prompt');
    let data = {
      targetType: 'prompt',
      targetUser: selectedProfile._id,
      text: text,
      promptId: selectedPrompt.data?.selectedPrompt?._id,
      answer: selectedPrompt.data?.answer,
    };
    console.log(data, 'data');
    dispatch(addComment(data)).then(res => {
      console.log(res, 'Response of add comment');
      showToast(res.message);
      infoPopup.current.hide();
    });
  };

  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{paddingBottom: vh * 20}}
          showsVerticalScrollIndicator={false}>
          <ProfileCard
            name={`${selectedProfile.firstName} ${selectedProfile.lastName}`}
            distance={selectedProfile.distance}
            img={
              selectedProfile?.images?.length
                ? {
                    uri: image_url + selectedProfile?.images[0].path,
                  }
                : images.noImage
            }
            // onPress={HandlePress}
          />

          {combineData.map((item, index) => {
            console.log(item);
            return (
              <>
                {item?.type == 'prompt' ? (
                  <QuoteCard
                    item={selectedProfile}
                    index={index}
                    question={item?.data?.selectedPrompt?.question}
                    answer={item?.data?.answer}
                    onPress={() => HandlePress(item)}
                    comment
                  />
                ) : (
                  <ProfileCard
                    img={{
                      uri: image_url + item.data?.path,
                    }}
                  />
                )}
              </>
            );
          })}

          <CommentPopup
            text={setText}
            successTitle={'Add Comment'}
            onAccept={HandleAccept}
            reference={infoPopup}
          />
          <InfoCard item={selectedProfile} />
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default ProfileDetailScreen;
