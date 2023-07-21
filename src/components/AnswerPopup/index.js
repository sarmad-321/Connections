import {View, Modal, FlatList, TextInput} from 'react-native';
import React, {useState, useImperativeHandle} from 'react';
import Animated, {
  SlideInDown
} from 'react-native-reanimated';
import MyStyles from './styles';
import Poppins from '../TextWrapper/Poppins';
import { vh } from '../../utils/units';
import ShadowView from '../ShadowView';
import FranklinMedium from '../TextWrapper/FranklinMedium';
import MainButton from '../Buttons/MainButton';

const AnswerPopup = props => {
  const styles =  MyStyles()
  const [visible, setVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = onCancel => {
    setVisible(false);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  const show = onShow => {
    setVisible(true);
    if (typeof onShow === 'function') {
      onShow();
    } else {
      if (props.onShow) {
        props.onShow();
      }
    }
  };    




 
  return (
    <Modal
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={styles.modal}>
      <View style={styles.mainContainer}>
      <Animated.View 
           entering={
            SlideInDown.duration(700)
              }
      style={[styles.innerContainer]}>
            <ShadowView dashed>
          <View style={styles.padding}>
            <FranklinMedium style={styles.h1}>
              {props.selectedPrompt.name}
            </FranklinMedium>
            {/* <Poppins style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing.
            </Poppins> */}
            <TextInput
            placeholder='Write your answer here ...'
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <MainButton
                onPress={()=>{}}
                style={{width: '75%', height: vh * 6, borderRadius: vh * 0.8}}>
                Answer
              </MainButton>
            </View>
          </View>
        </ShadowView>
      </Animated.View>
      </View>
    </Modal>
  );
};
export default AnswerPopup;
