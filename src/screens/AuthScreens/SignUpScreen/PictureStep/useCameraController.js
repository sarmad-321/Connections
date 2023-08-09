import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const useCameraController = onDataReceived => {
  const [images, setImages] = useState([
    {id: 1, image: null},
    {id: 2, image: null},
    {id: 3, image: null},
    {id: 4, image: null},
    {id: 5, image: null},
    {id: 6, image: null},
  ]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(() => {
    onDataReceived(images, {blindDating: isEnabled});
  }, [images, isEnabled]);
  const HandleGallery = id => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      let data = {
        name: `image${id}`,
        type: image.mime,
        uri: image.path,
      };
      let deepCopy = JSON.parse(JSON.stringify(images));
      let result = deepCopy.find(item => item.id == id);
      result.image = data;

      setImages(deepCopy);
    });
  };
  const HandleCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImages(image);
    });
  };
  return {
    HandleGallery,
    HandleCamera,
    images,
    isEnabled,
    toggleSwitch,
  };
};

export default useCameraController;
