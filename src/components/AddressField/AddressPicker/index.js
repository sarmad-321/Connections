import React, {Component} from 'react';
import {
  Modal,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity as TouchableHOC,
} from 'react-native';
import styles from './styles';
import AddressItem from './AddressItem';
import Api from '../Api';
import vw from './Units/vw';
import vh from './Units/vh';
import {appTheme} from '../../../utils/theme';
// import {generalImages} from '../../../../Assets/images';

class AddressPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      visible: false,
      predictions: [],
      text: '',
      disabled: false,
    };
  }

  getPredictions = text => {
    this.setState(p => {
      return {
        ...p,
        loading: true,
        text: text,
      };
    });

    Api.getAddressPrediction(text, predictions => {
      this.setState(p => {
        return {
          ...p,
          predictions: predictions.predictions ? predictions.predictions : [],
          loading: false,
        };
      });
    });
  };

  onItemSelected = item => {
    this.setState(p => {
      return {
        ...p,
        disabled: true,
      };
    });
    Api.getGeoCode(item.description, success => {
      console.log(success);
      let data = {
        formatted_address: success.formatted_address,
        location: success.geometry.location,
      };
      this.props.onValueChange({...data, found: true});

      this.modalDismiss();
    });
  };

  onSavedPlaceSelect = item => {
    this.setState(p => {
      return {
        ...p,
        disabled: true,
      };
    });
    let data = {
      formatted_address: item.name,
      location: {
        lat: item.lat,
        lng: item.long,
      },
    };
    this.props.onValueChange({...data, found: true});

    this.modalDismiss();
  };

  renderPickerItems = () => {
    return this.state.predictions.map((item, index, data) => {
      let selected = false;
      if (this.state.selectedItem === item) {
        selected = true;
      }

      return (
        <AddressItem
          disabled={this.state.disabled}
          selectCallback={() => this.onItemSelected(item)}
          selected={selected}
          item={item}
          label={item.description}
          key={index}
        />
      );
    });
  };

  modalDismiss = () => {
    // StatusBar.setHidden(false)
    this.setState(p => {
      return {
        ...p,
        visible: false,
      };
    });
  };
  modalShow = () => {
    this.setState(p => {
      return {
        ...p,
        visible: true,
        disabled: false,
      };
    });
  };

  render() {
    console.log(this.props.savedPlaces, 'saved Places ? ');
    let textToShow = this.props.placeHolder;
    let pickerButton = {
      ...styles.pickerButton,
      ...this.props.pickerButtonStyle,
    };

    let pickerButtonText = {
      ...styles.pickerButtonText,
      ...this.props.pickerButtonTextStyle,
    };

    let modalContentContainer = {
      ...styles.modalContentContainer,
    };
    if (this.props.defaultSelectedIndex) {
      textToShow =
        this.props.data[this.props.defaultSelectedIndex][
          this.props.labelProperty
        ];
    }
    if (this.state.selected === true) {
      textToShow = this.state.selectedItem[this.props.labelProperty];
    }

    if (this.props.mode === 'bottom') {
      modalContentContainer = {
        ...styles.modalContentContainer,
        height: 40 * vh,
        width: 100 * vw,
        backgroundColor: 'white',
        position: 'absolute',
        top: 60 * vh,
        left: 0 * vw,
      };
    }
    let item = {description: this.state.text};
    return (
      <Modal
        visible={this.state.visible}
        animationType="slide"
        transparent={true}
        onRequestClose={this.modalDismiss}
        style={styles.modal}>
        <TouchableHOC onPress={this.modalDismiss} style={styles.backDrop} />

        <View style={modalContentContainer}>
          <View>
            <TouchableHOC onPress={this.modalDismiss} style={styles.closeBtn}>
              <Image
                source={require('./cross.png')}
                style={{width: 3 * vw, height: 3 * vw, resizeMode: 'contain'}}
              />
            </TouchableHOC>

            <Text style={styles.Heading}>Search Location</Text>
          </View>
          <View
            style={{width: '100%', paddingTop: 1 * vh, alignItems: 'center'}}>
            <TextInput
              placeholder="Search Address Here..."
              autoFocus
              onChangeText={this.getPredictions}
              // containerStyle={styles.searchInput}
              style={styles.inputField}
              selectionColor={'red'}
              placeholderTextColor={'black'}
            />
          </View>
          <View>
            {this.state.loading && (
              <ActivityIndicator color={'red'} size="small" />
            )}
          </View>
          <ScrollView style={styles.itemsScroll}>
            {this.state.predictions.length < 1 && this.state.text != '' ? (
              <AddressItem
                selectCallback={() => this.onItemSelected(item)}
                selected={false}
                item={item}
                label={item.description}
                key={1}
              />
            ) : (
              <>
                {this?.props?.savedPlaces?.map(item => {
                  return (
                    <AddressItem
                      selectCallback={() => this.onSavedPlaceSelect(item)}
                      selected={false}
                      item={item}
                      label={item.name}
                      key={1}
                    />
                  );
                })}
              </>
            )}
            {this.renderPickerItems()}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default AddressPicker;
