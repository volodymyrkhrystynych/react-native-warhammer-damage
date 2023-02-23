import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DamageCalculator(props) {
    var attacks = props.attacks;
    var autowoundchance = 1 - (props.autoWoundChance - 1) / 6;
    var rerollhitOf = props.rerollHitOf / 6;
    var rerollwoundof = props.rerollWoundOf / 6;
    var hitchance = 1-(props.hitchance-1)/6 - autowoundchance;
    var woundchance = 1-(props.woundchance-1)/6;
    var failedsavechance = (props.savechance-1)/6;
    
    var numberofhits = attacks*hitchance + (attacks * props.explodingSixes)/6;
    
    var autowounds = (1 - (props.autoWoundChance - 1) / 6)*attacks;
    
    var woundsixes = numberofhits/6;

    var numberofwounds = numberofhits*woundchance + autowounds;
    
    var wounds = numberofwounds * failedsavechance;

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
