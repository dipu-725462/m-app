import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {registerRootComponent} from "expo";
import { StyleSheet, Text, View , Button , Alert } from 'react-native';

function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First React Native APP !</Text>
      <Button
          title="Press Me 1"
          onPress={() => Alert.alert('Learning React native')}
        />
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
  text : {
    marginBottom: 20
  }
});

export default registerRootComponent(App);