import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/theme'


const darkStyles = StyleSheet.create({
    center: {
        color: colors.light.primary,
        textAlign: "center"
    },
    img: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    },
    h2: {
        color: colors.light.primary
    }
})
const lightStyles = StyleSheet.create({
    center: {
        color: 'black',
        textAlign: "center"
    },
    img: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    },
    h2: {
        color: 'black'
    }
})

const MyStyles = () => {
    const theme = useColorScheme();
    if (theme == 'dark') {
        return darkStyles;
    } else {
        return lightStyles;
    }
};

export default MyStyles;