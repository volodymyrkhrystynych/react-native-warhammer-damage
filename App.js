import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState} from 'react';

export default function App() {
    const [attacks, setAttacks] = useState(0);
    const [hitChance, setHitChance] = useState(3);
    const [woundChance, setWoundChance] = useState(3);
    const [saveChance, setSaveChance] = useState(3);
  return (
    <View style={styles.container}>
      <Text>Number of attacks:</Text>
      <Slider
        style={{width : 200, height: 40}}
        onValueChange={setAttacks}
        step={1}
        minimumValue={0}
        maximumValue={40}
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='#FFFFFF'
      />
          <Text>
              {attacks}
          </Text>
      <Text>Needed to roll to hit:</Text>
          <Slider
              style={{ width: 200, height: 40 }}
              onValueChange={setHitChance}
              step={1}
              value={3}
              minimumValue={2}
              maximumValue={6}
              minimumTrackTintColor='#000000'
              maximumTrackTintColor='#FFFFFF'
          />
          <Text>
              {hitChance}
          </Text>

          <Text>What do 6s to hit give you?</Text>
          <Text>Default wound roll:</Text>
          <Slider
              style={{ width: 200, height: 40 }}
              onValueChange={setWoundChance}
              step={1}
              value={3}
              minimumValue={2}
              maximumValue={6}
              minimumTrackTintColor='#000000'
              maximumTrackTintColor='#FFFFFF'
          />
          <Text>
              {woundChance}
          </Text>

          <Text>Opponents default saving roll:</Text>
          <Slider
              style={{ width: 200, height: 40 }}
              onValueChange={setSaveChance}
              step={1}
              value={3}
              minimumValue={2}
              maximumValue={6}
              minimumTrackTintColor='#000000'
              maximumTrackTintColor='#FFFFFF'
          />
          <Text>
              {woundChance}
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
