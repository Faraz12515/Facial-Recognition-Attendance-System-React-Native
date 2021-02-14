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
  MaskedViewComponent,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import {LOGIN} from './../Constants/Global';
import * as Actions from './../REDUX/Action/Actions';
import AddClass from './AddClass';

function Login({navigation, loginuser}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  // setTimeout(() => {
  //   isLoggedIn == true && (setIsLoggedIn(false), navigation.navigate('Signup'));
  // }, 1000);

  const SIGNIN = async () => {
    if (!userName || !password) {
      Alert.alert('Alert!', 'Please Enter all the Fields properly', [
        {text: 'OK'},
      ]);
      return;
    }
    // navigation.navigate('Addclass');

    let fd = new FormData();
    fd.append('email', userName);
    fd.append('password', password);

    setIsLoggedIn(true);

    axios
      .post(LOGIN, fd)
      .then((res) => {
        setIsLoggedIn(false);
        console.log(res.data);
        // let myString = res.data.user_data;
        // myString = JSON.parse(myString.replace(/'/g, '"'));
        // console.log('UserData:', myString);
        loginuser(res.data.user_data);
        navigation.navigate('Addclass');
      })
      .catch((err) => {
        Alert.alert('Error!', 'Something Went Wrong', [{text: 'OK'}]);
        setIsLoggedIn(false);
        console.log(err);
      });
  };

  return isLoading == true ? (
    <ActivityIndicator
      size="large"
      color="#00a14e"
      style={{alignSelf: 'center', flex: 1}}
    />
  ) : (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
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

        <View style={styles.textInputView}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email or Phone"
              placeholderTextColor="#999"
              onChangeText={(text) => setUserName(text)}
              value={userName}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
        </View>

        <View style={{paddingTop: 20}}>
          <TouchableOpacity style={styles.Button} onPress={SIGNIN}>
            {isLoggedIn == true ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.ButtonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* <View style={{paddingTop: 20}}>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.ButtonText}>SignUp</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginuser: (data) => {
      dispatch({type: Actions.LOGIN, payload: data});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
    backgroundColor: '#00a14e',
    padding: 11,
    // marginTop: 30,
    marginVertical: '8%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    // borderWidth: 2,
    // borderColor: '#333',
    borderRadius: 4,
  },
  signup: {
    backgroundColor: '#00a14e',
    padding: 11,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    // elevation: 10,
    // borderWidth: 2,
    // borderColor: '#000',
    // borderRadius: 25,
  },
  ButtonText: {
    backgroundColor: 'red',
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ForgotButtonText: {
    textAlign: 'center',
    color: '#00a14e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ImageView: {width: '100%', height: '50%'},
  ImageStyle: {width: '70%', height: '100%', alignSelf: 'center'},
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
