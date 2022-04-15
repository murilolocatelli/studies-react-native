import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [ text, setText ] = useState('');
  const [ text2, setText2 ] = useState('');

  const handleClick = (e) => {
    console.log('teste');
    setText('Funcionou o/o/o/o/o/o/o/o/');
    setText2('A primeira app mobile... Weeeeeeeeeeeee!!!!!!!!!!!!');
  }
  
  return (
    <View style={styles.container}>
      <Button title='Clique aqui' onPress={handleClick}></Button>
      <Text>{ text }</Text>
      <Text>{ text2 }</Text>
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
