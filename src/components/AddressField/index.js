import React, {Component} from 'react';
import styles from './styles';
import AddressPicker from './AddressPicker';
import {TouchableOpacity} from 'react-native';

class AddressField extends Component {
  modalShow = () => {
    if (this.props.disabled) {
      return;
    }

    this.picker.modalShow();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.modalShow}
        style={[styles.main, this.props.style]}>
        <AddressPicker
          onValueChange={this.props.onValueChange}
          savedPlaces={this.props.savedPlaces}
          data={[]}
          ref={r => {
            this.picker = r;
          }}
        />
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default AddressField;
