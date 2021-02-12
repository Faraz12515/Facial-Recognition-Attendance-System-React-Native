import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {REGISTER_COURSE} from './../Constants/Global';
import * as Action from './../REDUX/Action/Actions';

function Register({navigation, classData, teacher, updateUser}) {
  const [isLoading, setIsLoading] = useState(false);

  const RegisterCourse = async () => {
    setIsLoading(true);
    let fd = new FormData();
    fd.append('teacher', teacher);
    fd.append('program', classData.program);
    fd.append('year', classData.year);
    fd.append('semester', classData.semester);
    fd.append('section', classData.section);
    fd.append('course', classData.course);
    fd.append('class_type', classData.class_type);

    console.log(fd);

    axios
      .post(REGISTER_COURSE, fd)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        let myString = res.data.user_data;
        myString = JSON.parse(myString);
        console.log('UserData:', myString);
        updateUser(myString);
        ToastAndroid.show('Course Added SuccessFully', ToastAndroid.LONG);
        navigation.navigate('Addclass');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" />
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
        <TouchableOpacity style={styles.Button} onPress={RegisterCourse}>
          {isLoading ? (
            <ActivityIndicator size={'small'} color={'#fff'} />
          ) : (
            <Text style={styles.ButtonText}>Register</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    classData: state.root,
    teacher: state.auth.user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => {
      dispatch({type: Action.UPDATE_USER, payload: data});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
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
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
