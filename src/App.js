import React, { Component } from 'react';
import Calculator from './Calculator';
import { StyleSheet, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 }
});

export default App;
