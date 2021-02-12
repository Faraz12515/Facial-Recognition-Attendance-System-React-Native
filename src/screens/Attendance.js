import axios from 'axios';
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
  const [color, setColor] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [image, setImage] = useState(null);

  //Select Image
  const selectImage = async () => {
    //Image Picker Code
  };

  //API Call For Mark Attendance
  const markAttendace = async () => {
    let fd = new FormData();

    const Image = {
      name: 'image.jpg',
      type: 'image/jpg',
      uri: image.uri,
    };
    fd.append('year', courseData.year);
    fd.append('semester', courseData.semester);
    fd.append('section', courseData.section);
    fd.append('course', courseData.course);
    fd.append('class_type', courseData.class_type);
    fd.append('class_pic', courseData.Image);
    fd.append('program', courseData.program);

    axios
      .post(ATTENDANCE, fd)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            source={image ? {uri: image.uri} : require('../../assets/user.png')}
          />
        </View>
        <View style={styles.ButtonView}>
          {image ? (
            <TouchableOpacity onPress={markAttendace} style={styles.Button}>
              <Text style={styles.ButtonText}>Mark</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={selectImage} style={styles.Button}>
              <Text style={styles.ButtonText}>Open Camera For Attendance</Text>
            </TouchableOpacity>
          )}

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
    width: '100%',
    elevation: 5,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextView: {
    paddingTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TextStyle: {fontSize: 16, paddingVertical: 5},
});
