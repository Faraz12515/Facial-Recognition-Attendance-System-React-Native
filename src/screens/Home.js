import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function Home({navigation}) {
  const btns = [
    {title: 'Login', nav: () => navigation.navigate('Login')},
    {title: 'Sign Up', nav: () => navigation.navigate('Signup')},
    // {title: 'Attandence', nav: () => navigation.navigate('Attendance')},
    // {title: 'Sign Up', nav: () => navigation.navigate('Signup')},
    // {title: 'Login', nav: () => navigation.navigate('Login')},
  ];

  const [color, setColor] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
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
      <View
        style={{
          position: 'absolute',
          bottom: '8%',
          alignSelf: 'center',
          width: '100%',
        }}>
        {btns.map((v, i) => {
          return (
            <TouchableOpacity key={i} style={styles.Button} onPress={v.nav}>
              <Text style={styles.ButtonText}>{v.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
  },

  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    marginVertical: '4%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
