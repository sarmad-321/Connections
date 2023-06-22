import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWraper from '../../../components/ScreenWrapper';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCard from '../../../components/ProfileCard';
import ShadowView from '../../../components/ShadowView';
import styles from './styles';
import Poppins from '../../../components/TextWrapper/Poppins';
import AbhayaLibre from '../../../components/TextWrapper/AbhayaLibre';
import LikeIcon from '../../../components/Buttons/LikeIcon';
import {ScrollView} from 'react-native-gesture-handler';
import QuoteCard from '../../../components/QuoteCard';
import InfoCard from '../../../components/InfoCard';

const ProfileDetailScreen = () => {
  return (
    <ScreenWraper>
      <SafeAreaView>
        <ScrollView>
          <ProfileCard />
          <QuoteCard
            text={'Lorem Ipsum is simply dummy text of the printing'}
            heading={'Getting Rid of dead bodies'}
          />
          <InfoCard />
        </ScrollView>
      </SafeAreaView>
    </ScreenWraper>
  );
};

export default ProfileDetailScreen;
