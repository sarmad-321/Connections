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
import styles, {darkgradient, gradient, lightgradient} from './styles';

const InputField = React.forwardRef((props, ref) => {
  const theme = useColorScheme();
  let activeColors = colors[theme];
  const gradientCombination = props.selectedGradient
    ? props.selectedGradient
    : theme === 'dark'
    ? darkgradient
    : lightgradient;
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
    <View style={[props?.inputView]}>
      {/* {props.label && (
        <Text style={styles.label}>
          {props.label} {props.required && '*'}
        </Text>
      )} */}
      <View style={styles.bottomshadow}>
        <LinearGradient
          colors={gradientCombination}
          style={[
            styles.input,
            props.containerStyle,
            props.multi ? {height: vh * 20} : null,
          ]}>
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
          {props.multi ? (
            <TextInput
              multiline
              numberOfLines={10}
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
              style={[
                {width: '100%', height: '100%', color: activeColors.btnText},
                props.multi
                  ? {fontSize: vh * 1.5, textAlignVertical: 'top'}
                  : null,
              ]}
              {...props}
              secureTextEntry={showPassword}
            />
          ) : (
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
              style={[
                {width: '100%', height: '100%', color: activeColors.btnText},
                props.multi ? {fontSize: vh * 1.5} : null,
              ]}
              {...props}
              secureTextEntry={showPassword}
            />
          )}
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
