import {StyleSheet, useColorScheme} from 'react-native';
import { vh, vw } from '../../../utils/units';
import { colors, fontColors } from '../../../utils/theme';

const lightStyles = StyleSheet.create({
    container: {
        paddingVertical: vh * 2,
        alignItems: 'center',
        paddingHorizontal: vw * 3.5,
        justifyContent: 'space-between',
        backgroundColor: colors.light.secondary,
        borderRadius: vw * 5,
      },
      row: {
        flexDirection: 'row',
        alignSelf: 'center',
      },
      yesBtn: {
        width: vw * 30,
        borderWidth: 1,
        marginRight: vh * 1,
        borderColor: "gray",
      },
      noBtn: {
        width: vw * 30,
        marginLeft: vh * 1,
        backgroundColor: "red",
        borderColor: "yellow",
      },
      checkCircle: {
        width: vh * 18,
        height: vh * 18,
        resizeMode: 'contain',
        marginTop: -vh * 5,
      },
      contentContainer: {
        width: vw * 80,
        borderColor: "green",
        borderRadius: vw * 0.5,
        borderWidth: vw * 0.3,
        borderColor: "red",
        borderRadius: vw * 5,

        // overflow: 'hidden',
      },
      circle: {
        width: vh * 10,
        height: vh * 10,
        backgroundColor: colors.btnBackground,
        position: 'absolute',
        top: -vh * 5,
        borderRadius: vh * 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: '20%',
        height: '20%',
        resizeMode: 'contain',
        tintColor: '#E1E1E1',
      },
      title: {
        color: colors.white,
        fontSize: vh * 2.5,
        marginTop: vh * 4,
        textAlign: 'center',
      },
      marginTop: {
        marginTop: vh * 4,
      },
      message: {
        marginTop: vh * 2,
        textAlign: 'center',
        color: fontColors.lightText,
      },
      textBtn: {
        marginBottom: vh
      },
      textStyle: {
        borderBottomWidth: 0
      },
});

const darkStyles = StyleSheet.create({
    container: {
        paddingVertical: vh * 2,
        alignItems: 'center',
        paddingHorizontal: vw * 3.5,
        justifyContent: 'space-between',
        backgroundColor: colors.light.primary,
        borderRadius: vw * 5,
      },
      row: {
        flexDirection: 'row',
        alignSelf: 'center',
      },
      yesBtn: {
        width: vw * 30,
        borderWidth: 1,
        marginRight: vh * 1,
        borderColor: "gray",
      },
      noBtn: {
        width: vw * 30,
        marginLeft: vh * 1,
        backgroundColor: "red",
        borderColor: "yellow",
      },
      checkCircle: {
        width: vh * 18,
        height: vh * 18,
        resizeMode: 'contain',
        marginTop: -vh * 5,
      },
      contentContainer: {
        width: vw * 80,
        borderRadius: vw * 0.5,
        borderWidth: vw * 0.3,
        borderColor: "red",
        borderRadius: vw * 5,
        height : vh*60
        // overflow: 'hidden',
      },
      circle: {
        width: vh * 10,
        height: vh * 10,
        backgroundColor: colors.btnBackground,
        position: 'absolute',
        top: -vh * 5,
        borderRadius: vh * 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: '20%',
        height: '20%',
        resizeMode: 'contain',
        tintColor: '#E1E1E1',
      },
      title: {
        color: colors.white,
        fontSize: vh * 2.5,
        marginTop: vh * 4,
        textAlign: 'center',
      },
      marginTop: {
        marginTop: vh * 4,
      },
      message: {
        marginTop: vh * 2,
        textAlign: 'center',
        color: fontColors.lightText,
      },
      textBtn: {
        marginBottom: vh
      },
      textStyle: {
        borderBottomWidth: 0
      },
});

const MyStyles = () => {
  const theme = useColorScheme();
  if (theme == 'dark') {
    return darkStyles;
  } else {
    return lightStyles;
  }
};

export default MyStyles;
