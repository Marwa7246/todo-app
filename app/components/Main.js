/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Note from './Note'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  render() {
    // console.log(this.state.noteArray)
    let notes = this.state.noteArray.map((val, index) => {
      return (
        <Note
          key={index}
          keyVal={index}
          val={val}
          deleteMethod={() => this.deleteNote(index)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>-NOTER-</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
          style={styles.textInput}
            placeholder=">note"
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addNote.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      const d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e8584f',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 10,
  },
  headerText: {
    fontSize: 18,
    padding: 26,
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
    color: 'red',


  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#e8584f',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },

});

