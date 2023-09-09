import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
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

  const HandlePress = item => {
    setSelectedPrompt(item);
    infoPopup.current.show();
  };
  const HandleAccept = () => {
    console.log(text);
    let data = {
      targetType: 'prompt',
      targetUser: selectedProfile._id,
      text: text,
      promptId: selectedPrompt._id,
      answer: selectedPrompt.answer,
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
          <FlatList
            data={prompt}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <>
                <QuoteCard
                  item={selectedProfile}
                  index={index}
                  question={item?.selectedPrompt.question}
                  answer={item?.answer}
                  onPress={() => HandlePress(item)}
                  comment
                />
              </>
            )}
          />

          <FlatList
            data={selectedProfile.images}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <>
                <ProfileCard
                  img={{
                    uri: image_url + item.path,
                  }}
                  // onPress={HandlePress}
                />
              </>
            )}
          />

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
