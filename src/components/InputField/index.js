import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../assets';
import {colors, fontColors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';
// import OutfitRegular from '../Wrappers/Text/OutfitRegular';
import styles from './styles';

const InputField = React.forwardRef((props, ref) => {
  const theme = useColorScheme();
  let activeColors = colors[theme];
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const borderAnimation = useRef(new Animated.Value(0)).current;
  // const [focus, setFocus] = useState();

  const tintColorAnimation = () => {
    Animated.timing(borderAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const tintOut = () => {
    Animated.timing(borderAnimation, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  tintOut;

  return (
    <View style={[{marginVertical: vh * 1.5}, props?.inputView]}>
      {/* {props.label && (
        <Text style={styles.label}>
          {props.label} {props.required && '*'}
        </Text>
      )} */}
      <View
        style={{
          overflow: 'hidden',
          paddingBottom: vh * 0.6,
          paddingHorizontal: vh * 0.2,
        }}>
        <LinearGradient
          colors={
            theme == 'dark'
              ? ['#2E2E2E', '#2E2E2E', '#5B5B5B']
              : ['white', 'white']
          }
          style={[styles.input, props.containerStyle]}>
          {props.icon && (
            <Image
              source={props.icon}
              style={[
                styles.logo,
                props?.iconStyle,
                props?.textAlignVertical && {
                  alignSelf: 'flex-start',
                  marginTop: vh * 1,
                },
              ]}
            />
          )}
          <TextInput
            ref={ref}
            keyboardType={props?.type}
            placeholderTextColor={activeColors.btnText}
            placeholder={props.label}
            onFocus={() => {
              tintColorAnimation();
              // setFocus(true);
            }}
            onBlur={() => {
              tintOut();
              // setFocus(false);
            }}
            autoCapitalize={false}
            style={{width: '100%', height: '100%', color: activeColors.btnText}}
            {...props}
            secureTextEntry={showPassword}
          />
          {props.rightIcon && (
            <TouchableOpacity
              style={[styles.rightIconContainer, {right: 0}]}
              onPress={props.onIconPress}>
              <Image source={props.rightIcon} style={[styles.rightIcon2]} />
            </TouchableOpacity>
          )}
          {props.secureTextEntry && (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              activeOpacity={0.5}
              style={styles.rightIconContainer}>
              <Animated.Image
                source={showPassword ? icons.eye_on : icons.eye_off}
                style={[
                  styles.rightIcon,
                  {
                    tintColor: borderAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [fontColors.greyAlt, colors.btnBackground], // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  },
                ]}
              />
            </TouchableOpacity>
          )}
        </LinearGradient>
      </View>
    </View>
  );
});

export default InputField;
