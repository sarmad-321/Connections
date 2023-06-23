import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useImperativeHandle} from 'react';
import PopupWrapper from '../PopupWrapper';
import FranklinMedium from '../../TextWrapper/FranklinMedium';
import Poppins from '../../TextWrapper/Poppins';
import MainButton from '../../Buttons/MainButton';
import MyStyles, {darkGradient, lightgradient} from './styles';
import {icons, images} from '../../../assets';
import InputField from '../../InputField';

const CommentPopup = props => {
  const theme = useColorScheme();
  const popup = useRef(null);
  const styles = MyStyles();
  const [accept, setAccept] = useState(false);
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
    if (props.onHide) {
      props.onHide();
    }
    setAccept(false);
  };

  const onYes = () => {
    console.log(props?.onAccept);
    if (props?.onAccept) {
      props?.onAccept();
    }

    hide();
  };

  const onNo = () => {
    hide();
  };
  return (
    <PopupWrapper
      contentContainerStyle={styles.contentContainer}
      reference={popup}>
      <View style={[styles.container]}>
        <Image
          source={props.image ? props.image : images.profileDummy}
          style={styles.image}
        />
        <InputField
          selectedGradient={theme == 'dark' ? darkGradient : lightgradient}
          label={'Add Comment'}
        />

        {props.onNo ? (
          <View style={styles.row}>
            <MainButton invert style={styles.yesBtn} onPress={onYes}>
              {props.successTitle ? props.successTitle : 'Yes'}
            </MainButton>
            {props.onNo && (
              <MainButton style={styles.noBtn} onPress={onNo}>
                No
              </MainButton>
            )}
          </View>
        ) : (
          <MainButton style={[styles.yesBtn, props?.yesBtn]} onPress={onYes}>
            {props.successTitle ? props.successTitle : 'Send Rose'}
          </MainButton>
        )}
        <TouchableOpacity style={styles.cancelContainer}>
          <Poppins style={styles.noBtn}>cancel</Poppins>
        </TouchableOpacity>
      </View>
    </PopupWrapper>
  );
};

export default CommentPopup;

const styles = StyleSheet.create({});
