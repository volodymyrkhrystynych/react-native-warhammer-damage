import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DamageCalculator(props) {
    var attacks = props.attacks;
    var hitchance = 1-(props.hitchance-1)/6;
    var woundchance = 1-(props.woundchance-1)/6;
    var savechance = (props.savechance-1)/6;

    var wounds = attacks*hitchance*woundchance*savechance;
    var woundPercent = wounds/ attacks;
    var sigma = Math.sqrt(wounds*(1-woundPercent));
    var negativeSigma = wounds - sigma;
    var positiveSigma = wounds + sigma;

    if (negativeSigma < 0) {
        negativeSigma = 0;
    }

    return (
            <>
            <Text>The expected unsaved wounds is: {wounds.toFixed(2)} </Text>
            <Text>The percentage of attacks going through is: {(woundPercent*100).toFixed(2)}%</Text>
            <Text>A good chance between {negativeSigma.toFixed(2)} and {positiveSigma.toFixed(2)} wounds</Text>
            </>
    )
};

export default DamageCalculator;
