import axios from 'axios';
import React, {useState, useEffect, PureComponent} from 'react';
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
import {RNCamera, FaceDetector} from 'react-native-camera';
import {ScreenSize} from '../components/theme';
// import ImagePicker from 'react-native-image-picker';

class Camera extends PureComponent {
  render() {
    return (
      <View style={{...styles.container, backgroundColor: 'transparent'}}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            position: 'absolute',
            alignSelf: 'center',
            bottom: 10,
          }}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text
              style={{
                fontSize: 14,
              }}>
              SNAP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log('Data->', data);
      this.props.setShowCamera(false);
    }
    const file = {
      uri: response.uri,
      name: response.fileName,
      type: 'image/jpeg',
    };
  };
}

export default function Attendance({navigation, route}) {
  const [color, setColor] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

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
      {showCamera == true ? (
        <Camera setShowCamera={setShowCamera} />
      ) : (
        <>
          <View style={{flex: 1}}>
            <Text style={styles.heading}>Mark Attendance</Text>
          </View>
          <View style={{flex: 4}}>
            <ScrollView contentContainerStyle={{flex: 1}}>
              <View
                style={{
                  // height: ScreenSize.hp4,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{
                    width: ScreenSize.hp2,
                    height: ScreenSize.hp2,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    borderRadius: 50,
                  }}
                  source={
                    image ? {uri: image.uri} : require('../../assets/user.png')
                  }
                />
              </View>
              <View style={{...styles.ButtonView, flex: 3}}>
                {image ? (
                  <TouchableOpacity
                    onPress={markAttendace}
                    style={styles.Button}>
                    <Text style={styles.ButtonText}>Mark</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => setShowCamera(true)}
                    style={styles.Button}>
                    <Text style={styles.ButtonText}>Mark Attendance</Text>
                  </TouchableOpacity>
                )}

                <View style={styles.TextView}>
                  {courseData ? (
                    <View>
                      <Text style={styles.TextStyle}>
                        Course Name:{' '}
                        <Text style={{...styles.TextStyle, fontWeight: 'bold'}}>
                          {courseData.course}
                        </Text>
                      </Text>
                      <Text style={styles.TextStyle}>
                        Class Type:{' '}
                        <Text style={{...styles.TextStyle, fontWeight: 'bold'}}>
                          {courseData.class_type}
                        </Text>
                      </Text>
                      <Text style={styles.TextStyle}>
                        Semester:{' '}
                        <Text style={{...styles.TextStyle, fontWeight: 'bold'}}>
                          {courseData.semester}
                        </Text>
                      </Text>
                      <Text style={styles.TextStyle}>
                        Section:{' '}
                        <Text style={{...styles.TextStyle, fontWeight: 'bold'}}>
                          {courseData.section}
                        </Text>
                      </Text>
                    </View>
                  ) : (
                    <ActivityIndicator size="small" color={'#fff'} />
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </>
      )}
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
    elevation: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  ButtonView: {
    flex: 1,
    alignSelf: 'center',
    width: '50%',
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    elevation: 5,
    borderRadius: 4,
    flex: 1, // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextView: {
    flex: 10,
    paddingTop: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TextStyle: {fontSize: 16, paddingVertical: 5},
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#e0e4c9',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
