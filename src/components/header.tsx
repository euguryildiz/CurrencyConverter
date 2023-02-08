import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#788891',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;