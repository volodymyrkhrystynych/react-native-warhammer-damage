import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DamageCalculator(props) {
    var attacks = props.attacks;

    var autowoundchance = (7 - props.autoWoundChance) / 6;
    var hitchance = (7- props.hitchance) / 6 - autowoundchance;
    var rerollhitof = props.rerollHitOf / 6;

    var rerollwoundof = props.rerollWoundOf / 6;
    var woundchance = (7 - props.woundchance)/6;

    var failedsavechance = (props.savechance-1)/6;

    var failedsavechancewithextraap = (props.savechance - 1 + props.extraAP) / 6;
    if (failedsavechancewithextraap > 1){failedsavechancewithextraap = 1;}

    //hit rolls
    var firsthitchance = hitchance;
    if (rerollhitof + hitchance > 1){
        firsthitchance = 1 - rerollhitof;
    }
    var numberoffailedhits = attacks*rerollhitof;

    var numberofhits = attacks*firsthitchance +
        ((attacks + numberoffailedhits) * props.explodingSixes)/6 +
        numberoffailedhits*hitchance;
    
    var autowounds = autowoundchance*attacks;
    
    // wound rolls

    // making sure to reroll, even if wound is successful
    var firstwoundroll = woundchance;
    if (firstwoundroll + rerollwoundof > 1){
        firstwoundroll = 1 - rerollwoundof;
    }

    var numberofwounds = numberofhits*(firstwoundroll +
        rerollwoundof * woundchance) + autowounds;
    
    var woundsixes = (numberofhits + numberofhits*rerollwoundof)/6;
    var wounds = (numberofwounds - woundsixes) * failedsavechance +
        woundsixes*failedsavechancewithextraap;

    var woundPercent = wounds/ attacks;

    return (
            <>
            <Text>The expected number of unsaved wounds is: {wounds.toFixed(2)} </Text>
            <Text>The percentage of attacks going through is: {(woundPercent*100).toFixed(2)}%</Text>
              <Text>Expected number of sixes to wound is: {woundsixes.toFixed(2)}</Text>
            </>
    )
};

export default DamageCalculator;
