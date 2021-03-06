import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
            </View>
            <View style={styles.row}>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
            </View>
            <View style={styles.row}>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
            </View>
            <View style={styles.row}>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
              <TouchableOpacity title="0"/>
            </View>
          </View>
          <View style={styles.numbers}></View>
          <View style={styles.operations}>
            <TouchableOpacity title="+"/>
            <TouchableOpacity title="+"/>
            <TouchableOpacity title="+"/>
            <TouchableOpacity title="+"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  }
});
