//import {Slider} from '@miblanchard/react-native-slider';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';


function DiceSlider(props){

    const CustomThumb = () => (
        <View style={{width:100,
                      height:40,
                      backgroundColor:'gray',
                     }}>
          <Text style={{textAlignVertical:'center',
                        textAlign:'center',
                        paddingTop:10
                       }}>
            { props.name }
          </Text>
        </View>
    );

    const customTrack = StyleSheet.create({
        track:{
            borderRadius:2,
            height:40,
        },
    });

    return (
        <View style = {{ width: 300, height: 40 }}>
            <Slider
                onValueChange={value => props.updater(value)}
                step={1}
                value={props.value}
                minimumValue={props.minimum}
                maximumValue={props.max}
            />
        </View>
    )
};

// setting default value to 1
DiceSlider.defaultProps={
    value:1,
    minimum:1,
    name:"hello"
}

export default DiceSlider;
