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
  return (
    <View style={styles.container}>
      <Text>Number of attacks: {attacks}</Text>
      <DiceSlider max={40} updater={setAttacks}/>

          <Text>Needed to roll to hit: {hitChance}+</Text>
          <DiceSlider max={6} updater={setHitChance} />

          <Text>Default wound roll: {woundChance}+</Text>
          <DiceSlider max={6} updater={setWoundChance} />

          <Text>Opponents default saving roll: {saveChance}+</Text>
      <DiceSlider max={7} value={3} updater={setSaveChance} />
          <DamageCalculator attacks={attacks} hitchance={hitChance} woundchance={woundChance} savechance={saveChance}/>
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
