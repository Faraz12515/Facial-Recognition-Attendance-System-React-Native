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
import * as Actions from './../REDUX/Action/Actions';

function Semesters({navigation, addSemester, year}) {
  const btns1 = [
    {title: '1st Semester', nav: () => navigation.navigate('Section')},
    {title: '2nd Semester', nav: () => navigation.navigate('Section')},
  ];

  const btns2 = [
    {title: '3rd Semester', nav: () => navigation.navigate('Section')},
    {title: '4th Semester', nav: () => navigation.navigate('Section')},
  ];

  const btns3 = [
    {title: '5th Semester', nav: () => navigation.navigate('Section')},
    {title: '6th Semester', nav: () => navigation.navigate('Section')},
  ];

  const btns4 = [
    {title: '7th Semester', nav: () => navigation.navigate('Section')},
    {title: '8th Semester', nav: () => navigation.navigate('Section')},
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
        {year === '1st Year'
          ? btns1.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addSemester(v.title);
                    navigation.navigate('Section');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : year === '2nd Year'
          ? btns2.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addSemester(v.title);
                    navigation.navigate('Section');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : year === '3rd Year'
          ? btns3.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addSemester(v.title);
                    navigation.navigate('Section');
                  }}>
                  <Text style={styles.ButtonText}>{v.title}</Text>
                </TouchableOpacity>
              );
            })
          : btns4.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.Button}
                  onPress={() => {
                    addSemester(v.title);
                    navigation.navigate('Section');
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
    year: state.root.year,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSemester: (data) => {
      dispatch({type: Actions.SEMESTER, payload: data});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Semesters);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
