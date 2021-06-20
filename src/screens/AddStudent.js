import React from 'react';
import {StyleSheet, View, Text, Picker, TextInput} from 'react-native';

export default function AddStudent() {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" /> */}
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,

            color: '#fff',
            backgroundColor: '#00a14e',
            fontWeight: 'bold',
            paddingVertical: '8%',
            elevation: 10,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          Add Student
        </Text>
      </View>

      {/**
       * TextInput
       */}
      <View style={styles.textInputView}>
        <View>
          <Text>Student Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g John Doe"
            placeholderTextColor="#999"
            // onChangeText={(text) => setUserName(text)}
            // value={userName}
          />
        </View>
        <View>
          <Text>EP Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g EP-1750099"
            placeholderTextColor="#999"
            secureTextEntry={true}
            // onChangeText={(text) => setPassword(text)}
            // value={password}
          />
        </View>
        <View>
          <Text>Section</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g Section B"
            placeholderTextColor="#999"
            secureTextEntry={true}
            // onChangeText={(text) => setPassword(text)}
            // value={password}
          />
        </View>
        <View>
          <Text>Year</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g 2017"
            placeholderTextColor="#999"
            secureTextEntry={true}
            // onChangeText={(text) => setPassword(text)}
            // value={password}
          />
        </View>
        <View>
          <Text>Semester</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g EP-1750099"
            placeholderTextColor="#999"
            secureTextEntry={true}
            // onChangeText={(text) => setPassword(text)}
            // value={password}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
  },
  textInputView: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
  },
  textInput: {
    marginVertical: 15,
    paddingVertical: 15,
    color: '#535353',

    fontSize: 16,
    paddingTop: 5,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  Button: {
    position: 'absolute',
    right: 18,
    bottom: 15,

    backgroundColor: '#00a14e',
    marginVertical: 15,
    height: 70,
    width: 70,

    elevation: 10,
    borderRadius: 50,
  },
  ButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
