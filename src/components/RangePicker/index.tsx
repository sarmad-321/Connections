/* @flow */
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { colors } from '../../utils/theme';
import Poppins from '../TextWrapper/Poppins';
import { vh } from '../../utils/units';



const thumbImage = require('./img/thumb.png');

const DEFAULT_VALUE = 0.2;


const SliderContainer = (props: {
    caption: string;
    children: React.ReactElement;
    sliderValue?: Array<number>;
    trackMarks?: Array<number>;
    vertical?: boolean;
}) => {
    const {caption, sliderValue, trackMarks} = props;
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent: React.ReactNode;


    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }

                return child;
            },
        );
    };

    return (
        <View >
            <View>
             {/* <Poppins style={{fontSize:vh*4,backgroundColor:"red"}}>{caption}</Poppins> */}
                <Poppins style={{textAlign:"right",color:colors.light.secondary}}>{Array.isArray(value) ? value.join(' - ') : value}</Poppins>
            </View>
            {renderChildren()}
        </View>
    );
};

const App = () => (
    <SafeAreaView>
 
      
     
            <SliderContainer
                
                sliderValue={[92, 135]}>
                <Slider
                    animateTransitions
                    maximumTrackTintColor="#d3d3d3"
                    maximumValue={150}
                    minimumTrackTintColor={colors.light.secondary}
                    minimumValue={50}
                    step={2}
                    thumbTintColor={colors.light.secondary}
                />
            </SliderContainer>

       

       
    </SafeAreaView>
);

export default App;
