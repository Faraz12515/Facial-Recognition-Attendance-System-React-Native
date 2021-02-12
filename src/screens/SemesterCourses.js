import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

import * as Action from './../REDUX/Action/Actions';

function SemesterCourses({navigation, semester, addCourse}) {
  const btns1 = [
    {title: 'ICS', nav: () => navigation.navigate('Theory')},
    {title: 'CLD', nav: () => navigation.navigate('Lab')},
  ];
  const btns2 = [
    {title: 'OOP', nav: () => navigation.navigate('Theory')},
    {title: 'Calculus', nav: () => navigation.navigate('Lab')},
  ];
  const btns3 = [
    {title: 'ODE', nav: () => navigation.navigate('Theory')},
    {title: 'Automata', nav: () => navigation.navigate('Lab')},
  ];

  const btns4 = [
    {title: 'Assembly', nav: () => navigation.navigate('Theory')},
    {title: 'Operating System', nav: () => navigation.navigate('Lab')},
  ];
  const btns5 = [
    {title: 'Networking', nav: () => navigation.navigate('Theory')},
    {title: 'Numerical Computing', nav: () => navigation.navigate('Lab')},
  ];
  const btns6 = [
    {title: 'Network Security', nav: () => navigation.navigate('Theory')},
    {
      title: 'Internet Programming Technique',
      nav: () => navigation.navigate('Lab'),
    },
  ];
  const btns7 = [
    {title: 'Accounting', nav: () => navigation.navigate('Theory')},
    {title: 'Distributed Computing', nav: () => navigation.navigate('Lab')},
  ];
  const btns8 = [
    {title: 'Software Testing', nav: () => navigation.navigate('Theory')},
    {title: 'Risk Management', nav: () => navigation.navigate('Lab')},
  ];

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
        {semester === '1st Semester'
          ? btns1.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '2nd Semester'
          ? btns2.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '3rd Semester'
          ? btns3.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '4th Semester'
          ? btns4.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '5th Semester'
          ? btns5.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '6th Semester'
          ? btns6.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : semester === '7th Semester'
          ? btns7.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : btns8.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addCourse(v.title);
                    navigation.navigate('Course');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    semester: state.root.semester,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (data) => {
      dispatch({type: Action.COURSE, payload: data});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SemesterCourses);

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
