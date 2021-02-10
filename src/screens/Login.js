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
} from 'react-native';

export default function Login({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  setTimeout(() => {
    isLoggedIn == true && (setIsLoggedIn(false), navigation.navigate('Home'));
  }, 1000);

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
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
        </View>

        <View style={{paddingTop: 20}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => setIsLoggedIn(true)}>
            {isLoggedIn == true ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.ButtonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity>
            <Text style={styles.ForgotButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
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
    marginVertical: 16,
    paddingVertical: 10,
    color: '#535353',

    fontSize: 16,
    paddingTop: 5,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    marginTop: 30,
    marginVertical: '3%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 5,
    borderRadius: 4,
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
