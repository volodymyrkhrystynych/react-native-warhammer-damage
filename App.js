import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import DiceSlider from './diceSlider';
import DamageCalculator from './damageCalculator'

export default function App() {
    const [attacks, setAttacks] = useState(1);
    const [hitChance, setHitChance] = useState(1);
    const [woundChance, setWoundChance] = useState(1);
    const [saveChance, setSaveChance] = useState(3);

    // special hit rules
    const [rerollHitOf, setRerollHitOf] = useState(0);
    const [autoWoundChance, setAutoWoundChance] = useState(7);
    const [explodingSixes, ExplodingSixesNumber] = useState(0);

    // special wound rules
    const [rerollWoundOf, setRerollWoundOf] = useState(0);
    const [extraAP, setExtraAP] = useState(0);

  return (
    <View style={styles.container}>
          <DamageCalculator attacks={attacks}
              hitchance={hitChance}
              rerollHitOf={rerollHitOf}
              autoWoundChance={autoWoundChance}
              explodingSixes={explodingSixes}
              rerollWoundOf={rerollWoundOf}
              extraAP={extraAP}
              woundchance={woundChance}
              savechance={saveChance} />
          <Text>-----------------------------</Text>
      <Text>Number of attacks: {attacks}</Text>
      <DiceSlider name={'Attacks'} max={40} value={attacks} updater={setAttacks}/>

          <Text>Needed to roll to hit: {hitChance}+</Text>
          <DiceSlider name={'Hit'} max={6} value={hitChance} updater={setHitChance} />

          <Text>Reroll hit rolls of: {rerollHitOf}-</Text>
          <DiceSlider name={'Reroll Hits'} max={5} value={rerollHitOf} minimum={0} updater={setRerollHitOf} />

      <Text>Lethal Hits on {autoWoundChance}+</Text>
          <DiceSlider name={'Lethal Hits'} max={7} value={autoWoundChance} updater={setAutoWoundChance} />

          <Text>Sustained Hits {explodingSixes}</Text>
          <DiceSlider name={'Sustained Hits'} max={6} value={explodingSixes} minimum={0} updater={ExplodingSixesNumber} />

          <Text>Default wound roll: {woundChance}+</Text>
          <DiceSlider name={'Wound'} max={6} value={woundChance} updater={setWoundChance} />

          <Text>Reroll wound rolls of: {rerollWoundOf}-</Text>
          <DiceSlider name={'Reroll Wounds'} max={5} value={rerollWoundOf} minimum={0} updater={setRerollWoundOf} />

          <Text>Amount of extra AP on a 6: {extraAP}</Text>
          <DiceSlider name={'6s Extra AP'} max={6} value={extraAP} minimum={0} updater={setExtraAP} />

          <Text>Opponents default saving roll: {saveChance}+</Text>
          <DiceSlider name={'Save'} max={7} value={saveChance} updater={setSaveChance} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
