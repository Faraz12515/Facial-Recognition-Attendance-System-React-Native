import axios from 'axios';
import React, {useState, useEffect, PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {ScreenSize} from '../components/theme';
import {ADD_STUDENT} from '../Constants/Global';

class Camera extends PureComponent {
  render() {
    return (
      <>
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
      </>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      var data = await this.camera.takePictureAsync(options);
      console.log('Data->', data);
      this.props.setShowCamera(false);
    }
    const file = {
      uri: data.uri,
      name: `${this.props.name}.jpg`,
      type: 'image/jpeg',
    };
    console.log('File To be sent', file);
    this.props.setImage(file);
  };
}

export default function AddStudent(props) {
  const [name, setName] = useState('');
  const [seatNo, setSeatNo] = useState('');
  const [section, setSection] = useState(props?.route?.params?.data?.section);
  const [year, setYear] = useState(props?.route?.params?.data?.year);
  const [semester, setSemester] = useState(
    props?.route?.params?.data?.semester,
  );
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const addStudent = async () => {
    if (name === '') {
      ToastAndroid.show('Please Enter the name', ToastAndroid.SHORT);
      return;
    }
    if (seatNo === '') {
      ToastAndroid.show('Please Enter the Seat No', ToastAndroid.SHORT);

      return;
    }

    if (image === null) {
      ToastAndroid.show('Please Capture the Image', ToastAndroid.SHORT);

      return;
    }

    let fd = new FormData();
    fd.append('name', name);
    fd.append('seat_number', seatNo);
    fd.append('year', year);
    fd.append('semester', semester);
    fd.append('section', section);
    fd.append('pic', image);

    console.log('Form Data', fd);

    setLoading(true);
    axios
      .post(ADD_STUDENT, fd)
      .then((res) => {
        setLoading(false);

        console.log('Responce Succes', res.data);
        ToastAndroid.show('Student Added Successfully', ToastAndroid.SHORT);
        props?.navigation?.goBack();
      })
      .catch((err) => {
        setLoading(false);
        console.log('Error!', err);
        ToastAndroid.show('Something Went Wrong', ToastAndroid.SHORT);
      });
  };

  return showCamera ? (
    <Camera setShowCamera={setShowCamera} setImage={setImage} name={name} />
  ) : (
    <View style={styles.container}>
      <>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,

              color: '#fff',
              backgroundColor: '#00a14e',
              fontWeight: 'bold',
              paddingVertical: '8%',
              elevation: 10,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            Add Student
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              borderRadius: 20,
              width: ScreenSize.hp2,
              height: ScreenSize.hp2,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={image ? {uri: image.uri} : require('../../assets/user.png')}
          />
          <TouchableOpacity
            style={{...styles.Button, width: '50%'}}
            onPress={() => setShowCamera(true)}>
            <Text style={styles.ButtonText}>
              {image ? 'Retake Image' : 'Capture Image'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputView}>
          <View>
            <Text style={styles.labelStyle}>Student Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g John Doe"
              placeholderTextColor="#999"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.labelStyle}>Seat Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g EP-1750099"
              placeholderTextColor="#999"
              onChangeText={(text) => setSeatNo(text)}
              value={seatNo}
            />
          </View>
          {/* <View style={styles.border}>
          <Text style={styles.labelStyle}>Section</Text>

          <Picker
            selectedValue={section}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => setSection(itemValue)}
            style={{}}>
            <Picker.Item label="A" value={'A'} />
            <Picker.Item label="B" value={'B'} />
          </Picker>
        </View>
        <View style={styles.border}>
          <Text style={styles.labelStyle}>Year</Text>
          <Picker
            selectedValue={year}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
            style={{}}>
            <Picker.Item label="1st Year" value={'1st Year'} />
            <Picker.Item label="2nd Year" value={'2nd Year'} />
            <Picker.Item label="3rd Year" value={'3rd Year'} />
            <Picker.Item label="4th Year" value={'4th Year'} />
          </Picker>
        </View>
        <View style={styles.border}>
          <Text style={styles.labelStyle}>Semester</Text>

          <Picker
            selectedValue={semester}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => setSemester(itemValue)}>
            <Picker.Item label="1st Semester" value={'1st Semester'} />
            <Picker.Item label="2nd Semester" value={'2nd Semester'} />
          </Picker>
        </View> */}
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => addStudent()}>
          {loading ? (
            <ActivityIndicator size={'small'} color={'#fff'} />
          ) : (
            <Text style={styles.ButtonText}>Add Student</Text>
          )}
        </TouchableOpacity>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
  },
  textInputView: {
    marginTop: 30,
    alignSelf: 'center',
    width: '90%',
  },
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
  textInput: {
    marginVertical: 5,
    paddingVertical: 15,
    color: '#535353',

    fontSize: 16,
    paddingTop: 5,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },

  labelStyle: {
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: '#00a14e',
    padding: 11,
    marginVertical: '2.5%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    elevation: 10,
    borderRadius: 4,
    marginTop: 20,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  border: {borderBottomWidth: 1, borderBottomColor: '#999', marginBottom: 5},
});
