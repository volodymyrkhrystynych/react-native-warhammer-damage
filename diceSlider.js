import Slider from '@react-native-community/slider';
import React, { useState } from 'react';


function DiceSlider(props){


    return (
        <Slider
            style={{ width: 200, height: 40 }}
            onValueChange={props.updater}
            step={1}
            value={1}
            minimumValue={1}
            maximumValue={props.max}
            minimumTrackTintColor='#000000'
            maximumTrackTintColor='#FFFFFF'
        />
    )
};

export default DiceSlider;
