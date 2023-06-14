import { StyleSheet, useColorScheme } from 'react-native';
import { vh, vw } from '../../../utils/units';
import { colors, fontColors } from '../../../utils/theme';

const lightStyles = StyleSheet.create({

});

const darkStyles = StyleSheet.create({

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
