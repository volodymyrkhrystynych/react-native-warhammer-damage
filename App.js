import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import DiceSlider from './diceSlider';

export default function App() {
    const [attacks, setAttacks] = useState(0);
    const [hitChance, setHitChance] = useState(3);
    const [woundChance, setWoundChance] = useState(3);
    const [saveChance, setSaveChance] = useState(3);
  return (
    <View style={styles.container}>
      <Text>Number of attacks:</Text>
      <DiceSlider max={40} updater={setAttacks}/>
          <Text>
              {attacks}
          </Text>
      <Text>Needed to roll to hit:</Text>
          <DiceSlider max={6} updater={setHitChance} />
          <Text>
              {hitChance}
          </Text>

          <Text>Default wound roll:</Text>
          <DiceSlider max={6} updater={setWoundChance} />
          <Text>
              {woundChance}
          </Text>

          <Text>Opponents default saving roll:</Text>
          <DiceSlider max={6} updater={setSaveChance} />
          <Text>
              {saveChance}
          </Text>
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
