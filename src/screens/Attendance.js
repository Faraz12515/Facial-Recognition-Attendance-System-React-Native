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
      {/* <StatusBar barStyle="light-content" /> */}
      <View>
        <Text style={styles.heading}>Mark Attendance</Text>
      </View>
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
          <View style={styles.ButtonView}>
            {btns.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles.Button} onPress={v.nav}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.TextView}>
            {Details.map((v, i) => {
              return (
                <Text key={i} style={styles.TextStyle}>
                  {v.type}
                  <Text style={{...styles.TextStyle, fontWeight: 'bold'}}>
                    {v.title}
                  </Text>
                </Text>
              );
            })}
          </View>
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
  heading: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
    backgroundColor: '#00a14e',
    fontWeight: 'bold',
    paddingVertical: '8%',
  },
  ButtonView: {
    alignSelf: 'center',
    width: '50%',
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 8,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  TextView: {
    paddingTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TextStyle: {fontSize: 16, paddingVertical: 5},
});
