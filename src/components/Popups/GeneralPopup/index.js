import {Image, View} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import MainButton from '../../Buttons/MainButton';
import PopupWrapper from '../PopupWrapper';
import {icons} from '../../../assets';

import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../utils/theme';
import MyStyles from './styles';
import AbhayaLibre from '../../TextWrapper/AbhayaLibre';
import FranklinMedium from '../../TextWrapper/FranklinMedium';

const GeneralPopup = props => {
  const popup = useRef(null);
  const styles = MyStyles()
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
            source={props.icon ? props.icon : icons.info}
            style={styles.icon}
          />
        {props?.title ?
          <AbhayaLibre style={styles.title}>{props.title}</AbhayaLibre>
        :
          <View style={styles.marginTop} />
        }
        {props.message && (
          <FranklinMedium style={styles.message}>{props.message}</FranklinMedium>
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
            {props.successTitle ? props.successTitle : 'Ok'}
          </MainButton>
        )}

      </View>
    </PopupWrapper>
  );
};
export default GeneralPopup;
