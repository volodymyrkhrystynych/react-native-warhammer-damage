import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DamageCalculator(props) {
    var attacks = props.attacks;
    var autowoundchance = 1 - (props.autoWoundChance - 1) / 6;
    var rerollhitof = props.rerollHitOf / 6;
    var rerollwoundof = props.rerollWoundOf / 6;
    var hitchance = 1-(props.hitchance-1)/6 - autowoundchance;
    var woundchance = 1-(props.woundchance-1)/6;
    var failedsavechance = (props.savechance-1)/6;
    var failedsavechancewithextraap = (props.savechance - 1 - props.extraAP) / 6;
    if (failedsavechancewithextraap > 1){failedsavechancewithextraap = 1;}
    var firsthitchance = hitchance;
    if (rerollhitof + hitchance > 1){
        firsthitchance = 1 - rerollhitof;
    }
    var numberoffailedhits = attacks*(1-firsthitchance);

    var numberofhits = attacks*firsthitchance + ((attacks + numberoffailedhits) * props.explodingSixes)/6 + numberoffailedhits*hitchance;
    
    var autowounds = (1 - (props.autoWoundChance - 1) / 6)*attacks;
    

    var firstwoundroll = woundchance;
    if (firstwoundroll + rerollwoundof > 1){
        firstwoundroll = 1 - rerollwoundof;
    }
    var numberoffirstfailedwounds = numberofhits*(1-firstwoundchance);

    var numberofwoundrollsuccesses = numberofhits*firstwoundroll +  numberoffirstfailedwounds * woundchance; 
    var numberofwounds = numberofwoundrollsuccesses + autowounds;
    
    var woundsixes = numberofwoundrollsuccesses / 6;
    var wounds = (numberofwounds - woundsixes) * failedsavechance + woundsixes*failedsavechancewithextraap;

    var woundPercent = wounds/ attacks;

    return (
            <>
            <Text>The expected unsaved wounds is: {wounds.toFixed(2)} </Text>
            <Text>The percentage of attacks going through is: {(woundPercent*100).toFixed(2)}%</Text>
              <Text>Expected number of sixes to wound is: {woundsixes.toFixed(2)}</Text>
            </>
    )
};

export default DamageCalculator;
