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

export default function Attendance({navigation}) {
  const btns = [{title: 'TIME IN', nav: () => navigation.navigate('')}];
  const Details = [
    {type: 'Name: ', title: 'Syed Faraz Ali'},
    {type: 'Designation: ', title: 'Trail Designaion'},
    {type: 'Phone: ', title: '03152174051'},
  ];
  const {type, title} = Details;

  const [color, setColor] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={{paddingTop: '30%'}}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={require('../../assets/user.png')}
          />
        </View>
      </ScrollView>
      <View style={styles.ButtonView}>
        {btns.map((v) => {
          return (
            <TouchableOpacity style={styles.Button} onPress={v.nav}>
              <Text style={styles.ButtonText}>{v.title}</Text>
            </TouchableOpacity>
          );
        })}
        <View style={styles.TextView}>
          {Details.map((v) => {
            return (
              <Text>
                {v.type}
                <Text>{v.title}</Text>
              </Text>
            );
          })}
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
  ButtonView: {
    position: 'absolute',
    bottom: '50%',
    alignSelf: 'center',
    width: '50%',
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    marginVertical: '2.5%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 5,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  TextView: {justifyContent: 'center', alignItems: 'center'},
});
