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
      <Text>Number of attacks: {attacks}</Text>
      <DiceSlider max={40} updater={setAttacks}/>

          <Text>Needed to roll to hit: {hitChance}+</Text>
          <DiceSlider max={6} updater={setHitChance} />

          <Text>Reroll failed hit roll of: 0 - {rerollHitOf}</Text>
      <DiceSlider max={6} value={0} minimum={0} updater={setRerollHitOf} />

          <Text>Roll to autowound: {autoWoundChance}+</Text>
          <DiceSlider max={7} value={7} updater={setAutoWoundChance} />

          <Text>Number of extra hits on a 6: {explodingSixes}</Text>
          <DiceSlider max={6} value={0} minimum={0} updater={ExplodingSixesNumber} />

          <Text>Default wound roll: {woundChance}+</Text>
          <DiceSlider max={6} updater={setWoundChance} />

          <Text>Reroll failed wound roll of: 0 - {rerollWoundOf}</Text>
      <DiceSlider max={6} value={0} minimum={0} updater={setRerollWoundOf} />

          <Text>Amount of extra AP on a 6: {extraAP}</Text>
          <DiceSlider max={6} value={0} minimum={0} updater={setExtraAP} />

          <Text>Opponents default saving roll: {saveChance}+</Text>
      <DiceSlider max={7} value={3} updater={setSaveChance} />
          <DamageCalculator attacks={attacks}
                            hitchance={hitChance}
                            rerollHitOf={rerollHitOf}
                            autoWoundChance={autoWoundChance}
                            explodingSixes={explodingSixes}
                            rerollWoundOf={rerollWoundOf}
                            extraAp={extraAP}
                            woundchance={woundChance}
                            savechance={saveChance}/>
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
