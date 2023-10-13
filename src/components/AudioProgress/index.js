import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import MyStyles from './styles';
import {icons} from '../../assets';
import {vh, vw} from '../../utils/units';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
let interval;
const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioProgress = ({duration, url}) => {
  const [currentTime, setCurrentTime] = useState(0); // State to track the current time in seconds
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether audio is playing
  const styles = MyStyles();
  console.log(currentTime, 'current time');
  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const startTimer = () => {
    interval = setInterval(() => {
      console.log('number');
      setCurrentTime(prevTime => {
        const newTime = prevTime + 0.5; // Simulated 0.5-second progress
        if (newTime >= duration) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return newTime;
      });
    }, 500);
  };

  const handleVoicePress = async () => {
    console.log(url, 'url to play');
    const msg = await audioRecorderPlayer.startPlayer(url);
    setIsPlaying(true);
    startTimer();
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition == e.duration) {
        onStopPlay();
      }
    });
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    setIsPlaying(false);
  };

  const handlePlayPauseToggle = () => {
    if (!isPlaying) {
      handleVoicePress();
    } else {
      // onStopPlay();
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
