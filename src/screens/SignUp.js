import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {SIGN_UP} from '../Constants/Global';

export default function SignUp({navigation}) {
  const [isLoading, setisLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  setTimeout(() => {
    setisLoading(false);
  }, 1000);

  const SignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Alert!', 'Please Enter All the Fields Properly', [
        {text: 'OK'},
      ]);
      return;
    }

    setIsLoggedIn(true);

    const fd = new FormData();
    fd.append('name', fullName);
    fd.append('email', email);
    fd.append('password', password);

    console.log('formdata:', fd);

    axios
      .post(SIGN_UP, fd)
      .then((res) => {
        setIsLoggedIn(false);
        console.log(res.data);
        Alert.alert('Success', 'Your account has been Created', [
          {text: 'Ok', onPress: () => navigation.navigate('Login')},
        ]);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        Alert.alert('Error!', 'Something Went Wrong', [{text: 'OK'}]);
      });
  };

  // setTimeout(() => {
  //   isLoggedIn == true && (setIsLoggedIn(false), navigation.navigate('Login'));
  // }, 1000);

  return isLoading == true ? (
    <ActivityIndicator
      size="large"
      color="#00a14e"
      style={{alignSelf: 'center', flex: 1}}
    />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView>
          <View style={{paddingTop: 50}}>
            <Image
              style={{
                width: 370,
                height: 200,
                resizeMode: 'stretch',
                alignSelf: 'center',
              }}
              source={require('../../assets/ku.png')}
            />
          </View>
        </ScrollView>

        <View style={styles.textInputView}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              placeholderTextColor="#999"
              onChangeText={(text) => setFullName(text)}
              value={fullName}
            />
          </View>

          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              placeholderTextColor="#999"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#999"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              value={password}
            />
          </View>
        </View>
        <View style={{paddingTop: 15}}>
          <TouchableOpacity style={styles.Button} onPress={SignUp}>
            {isLoggedIn == true ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.ButtonText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
  },

  textInputView: {alignSelf: 'center', width: '90%', marginTop: 10},
  textInput: {
    marginVertical: 15,
    paddingVertical: 15,
    color: '#535353',
    fontSize: 16,
    paddingTop: 3,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    marginVertical: '8%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    // borderWidth: 2,
    // borderColor: '#000',
    borderRadius: 4,
  },
  ImageView: {width: '100%', height: '36%'},
  ImageStyle: {width: '70%', height: '100%', alignSelf: 'center'},
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
