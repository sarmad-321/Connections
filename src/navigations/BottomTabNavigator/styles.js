import { StyleSheet, useColorScheme } from 'react-native';
import { colors, fontColors } from '../../../utils/theme';
import { vh, vw } from '../../utils/units';

const lightStyles = StyleSheet.create({
    tabStyle: {
        display: 'flex',
        position: 'absolute',
        height: Platform.OS === 'ios' ? vh * 12 : vh * 10,
        borderTopLeftRadius: vw * 5,
        borderTopRightRadius: vw * 5,
        backgroundColor: "green",
        borderTopColor: "green",
        // width: '80%',
        // borderTopWidth: 0,
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: '100%',
        height: vh * 7,
    },
    focusedView: {
        // borderRadius: vh * 10,
    },
    circleIcon: {
        position: 'absolute',
        bottom: -0 * vh,
        width: vw * 1.7,
        height: vw * 1.7,
        borderRadius: (vw * 1.7) / 2,
        backgroundColor: "red",
    }
});

const darkStyles = StyleSheet.create({
    tabStyle: {
        display: 'flex',
        position: 'absolute',
        height: Platform.OS === 'ios' ? vh * 12 : vh * 10,
        borderTopLeftRadius: vw * 5,
        borderTopRightRadius: vw * 5,
        backgroundColor: "green",
        borderTopColor: "green",
        // width: '80%',
        // borderTopWidth: 0,
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: '100%',
        height: vh * 7,
    },
    focusedView: {
        // borderRadius: vh * 10,
    },
    circleIcon: {
        position: 'absolute',
        bottom: -0 * vh,
        width: vw * 1.7,
        height: vw * 1.7,
        borderRadius: (vw * 1.7) / 2,
        backgroundColor: "red",
    }
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
