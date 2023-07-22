import { View, Modal, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useImperativeHandle } from 'react';
import Animated, {
  SlideInDown
} from 'react-native-reanimated';
import MyStyles from './styles';
import Poppins from '../TextWrapper/Poppins';
import { vh } from '../../utils/units';

const SelectDropDown = props => {
  const styles = MyStyles()
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
  const getHeight = () => {
    if (props?.values?.length > 18) {
      return vh * 80;
    }
    if (props?.values?.length > 10) {
      return vh * 80;
    }
    return 'auto';
  };

  const handleItemPress = item => {
    console.log(item);
    const isExisted = selectedValues.find(
      element => element?.name == item?.name,
    );
    if (isExisted) {
      const removeExistant = selectedValues.filter(
        element => element?.name !== item?.name,
      );
      setSelectedValues(removeExistant);
    } else {
      setSelectedValues([...selectedValues, item]);
    }
  };

  const handleCheckBox = item => {
    const isExisted = selectedValues.find(
      element => element?.name === item?.name,
    );
    if (isExisted) {
      return true;
    } else {
      return false;
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={
          SlideInDown.duration((index + 1) * 150)
        }
        style={styles.field}>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: "4%"
          }}
          onPress={() => {
            setVisible(false);
            props.onChangeValue(item);
          }}>
          <Poppins style={styles.h1}>{item?.name}</Poppins>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  return (
    <Modal
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={styles.modal}>
      <View style={styles.mainContainer}>
        <View style={[styles.innerContainer, { height: getHeight() }]}>
          {/* <View style={styles.heading}>
            <EuclidCircularARegular>{props.heading}</EuclidCircularARegular>
          </View> */}

          <FlatList
            data={props.values}
            showsVerticalScrollIndicator={false}
            renderItem={item => renderItem(item)}
            horizontal={false}
          />
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            setVisible(false);
            props?.onChangeValue(selectedValues);
          }}
          style={[styles.cancel]}>
          <Poppins style={styles.poppin}>Done</Poppins>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};
export default SelectDropDown;
