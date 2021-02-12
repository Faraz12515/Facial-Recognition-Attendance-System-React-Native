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
    width: '100%',
    elevation: 5,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  TextView: {justifyContent: 'center', alignItems: 'center'},
});
