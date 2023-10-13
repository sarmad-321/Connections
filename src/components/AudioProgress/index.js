import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import MyStyles from './styles';
import {icons} from '../../assets';
import {vh, vw} from '../../utils/units';
let interval;

const AudioProgress = ({duration, onStartVoice, onStopPlay}) => {
  const [currentTime, setCurrentTime] = useState(0); // State to track the current time in seconds
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether audio is playing

  const styles = MyStyles();

  useEffect(() => {
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => {
          const newTime = prevTime + 0.5; // Simulated 0.5-second progress
          if (newTime >= duration) {
            clearInterval(interval);
            setCurrentTime(0);
            setIsPlaying(false);
            return duration;
          }
          return newTime;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayPauseToggle = () => {
    if (!isPlaying) {
      onStartVoice();
      setIsPlaying(true);
    } else {
      onStopPlay();
      setCurrentTime(0);
      setIsPlaying(false);

      clearInterval(interval);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePlayPauseToggle}>
        {isPlaying ? (
          <Image style={styles.playIcon} source={icons.stopButton} />
        ) : (
          <Image style={styles.playIcon} source={icons.playButton} />
        )}
      </TouchableOpacity>
      <View
        style={{
          width: '80%',
          marginLeft: vw * 4,
          height: vh * 5,
          top: -vh * 0.5,
        }}>
        <Slider
          style={styles.slider_style}
          minimumValue={0}
          disabled={true}
          maximumValue={duration}
          minimumTrackTintColor="purple"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="purple"
          value={currentTime}
          thumbStyle={styles.thumbStyle}
        />
      </View>
    </View>
  );
};

export default AudioProgress;
