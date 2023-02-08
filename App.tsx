import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './src/components/header';
import Converter from './src/components/converter';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Currency Converter"/>
        <Converter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1
  },
});

export default App;