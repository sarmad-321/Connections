import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWraper from '../../../components/ScreenWrapper'
import { images } from '../../../assets'
import Question from '../../../components/Question'
import { vw } from '../../../utils/units'
import Poppins from '../../../components/TextWrapper/Poppins'
import MainButton from '../../../components/Buttons/MainButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MyStyles from './styles'

const WelcomeScreen = ({ navigation }) => {
    const styles = MyStyles();
    const HandlePress = (text) => {
        navigation.navigate('Login', { value: text })
        console.log(text)
    }
    return (
        <ScreenWraper pad={{ paddingHorizontal: 0 }}>
            <View style={{ flex: 0.55 }}>
                <Image source={images.welcome} style={styles.img} />
            </View>
            <View style={{ flex: 0.45, paddingHorizontal: vw * 5 }}>
                <Question style={{ paddingTop: 0 }} text={`Find Your Partner In Life`} />
                <Poppins style={styles.h2}>We created to bring together amazing singles who want to find love, laughter and happily ever after!
                </Poppins>
                <MainButton onPress={() => { HandlePress('Email') }}>Continue with Email</MainButton>

                <TouchableOpacity onPress={() => { HandlePress('Phone') }}>
                    <Poppins style={styles.center}>Or Continue with Phone Number</Poppins>
                </TouchableOpacity>

            </View>

        </ScreenWraper>

    )
}

export default WelcomeScreen
