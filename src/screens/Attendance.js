import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

export default function Attendance({navigation, route}) {
  // const btns = [{title: 'TIME IN', nav: () => navigation.navigate('')}];

  // const {type, title} = Details;

  const [color, setColor] = useState(false);
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    setCourseData(route.params.data);
  }, [courseData]);

  console.log(courseData);
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
<<<<<<< HEAD
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Mark Attendance</Text>
        </TouchableOpacity>

        <View style={styles.TextView}>
          {courseData ? (
            <View>
              <Text>Course Name: {courseData.course}</Text>
              <Text>Class Type: {courseData.class_type}</Text>
              <Text>Semester: {courseData.semester}</Text>
              <Text>Section: {courseData.section}</Text>
            </View>
          ) : (
            <ActivityIndicator size="small" color={'#fff'} />
          )}
        </View>
      </View>
=======
>>>>>>> ba2943569173036a95e8893c7408f66ba030392e
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
<<<<<<< HEAD
    width: '100%',
    elevation: 5,
=======
    width: '90%',
    elevation: 10,
>>>>>>> ba2943569173036a95e8893c7408f66ba030392e
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
