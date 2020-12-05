import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Note extends Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity
          style={styles.noteDelete}
          onPress={this.props.deleteMethod}>
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
    position: 'relative',
    padding: 20,
    paddingRight: 100,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
    // color: 'black',
  },
  noteDelete: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    padding: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
});
