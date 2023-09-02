import {Image, Text, View} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import MainButton from '../../Buttons/MainButton';
import PopupWrapper from '../PopupWrapper';
import {icons} from '../../../assets';
import MyStyles from './styles';
import FranklinMedium from '../../TextWrapper/FranklinMedium';
import Poppins from '../../TextWrapper/Poppins';

const GeneralPopup = props => {
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
          source={props.icon ? props.icon : icons.blind}
          style={styles.icon}
        />
        {props?.title ? (
          <FranklinMedium style={styles.title}>{props.title}</FranklinMedium>
        ) : (
          <View style={styles.marginTop} />
        )}
        {props.message && (
          <Poppins style={styles.message}>{props.message}</Poppins>
        )}
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
            {props.successTitle ? props.successTitle : 'Continue'}
          </MainButton>
        )}
      </View>
    </PopupWrapper>
  );
};
export default GeneralPopup;
