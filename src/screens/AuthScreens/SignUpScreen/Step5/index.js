import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Question from '../../../../components/Question';
import SelectButton from '../../../../components/Buttons/SelectButton';
import {vh} from '../../../../utils/units';
import styles from './styles';
import {icons} from '../../../../assets';
import useCameraController from '../PictureStep/useCameraController';

const Step5 = () => {
  const {HandleGallery, HandleCamera, images} = useCameraController();

  useEffect(() => {
    console.log(images);
  }, []);
  return (
    <SafeAreaView>
      <Question step={'06'} text={`Choose Your Best Photos & Videos`} />
      <SelectButton
        onPress={HandleGallery}
        icon={icons.library}
        styles={styles.button}
        text="Choose from Gallery"
      />
      <SelectButton
        onPress={HandleCamera}
        icon={icons.camera}
        styles={styles.button}
        text="Camera Roll"
      />
    </SafeAreaView>
  );
};

export default Step5;
