import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from '../../../components/ProfileCard';
import ShadowView from '../../../components/ShadowView';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import AbhayaLibre from '../../../components/TextWrapper/AbhayaLibre';
import LikeIcon from '../../../components/Buttons/LikeIcon';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import QuoteCard from '../../../components/QuoteCard';
import InfoCard from '../../../components/InfoCard';
import CommentPopup from '../../../components/Popups/CommentPopup';

const ProfileDetailScreen = () => {
  const data = [1, 2, 3, 4, 5, 6]
  const infoPopup = useRef();
  const HandlePress = () => {
    infoPopup.current.show();
    console.log('test');
  };
  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <ProfileCard like comment onPress={HandlePress} />
                <QuoteCard
                  text={'Lorem Ipsum is simply dummy text of the printing'}
                  heading={'Getting Rid of dead bodies'}
                  like
                />
                <CommentPopup
                  reference={infoPopup}
                  title={'Blind Date'}
                  message={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis vestibulum est, a faucibus.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis vestibulum est, a faucibus.'
                  }
                />
                <InfoCard />
              </>
            )}
          />


        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default ProfileDetailScreen;
