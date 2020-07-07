import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button , Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First React Native APP !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
