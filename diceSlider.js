import Slider from '@react-native-community/slider';
import React, { useState } from 'react';


function DiceSlider(props){


    return (
        <Slider
            style={{ width: 200, height: 40 }}
            onValueChange={props.updater}
            step={1}
            value={props.value}
            minimumValue={1}
            maximumValue={props.max}
            minimumTrackTintColor='#000000'
            maximumTrackTintColor='#FFFFFF'
        />
    )
};

// setting default value to 1
DiceSlider.defaultprops={
    value:1
}

export default DiceSlider;
