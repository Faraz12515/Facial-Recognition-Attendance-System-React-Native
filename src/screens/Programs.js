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

function Programs({navigation, addProgram}) {
  const btns = [
    {title: 'CS', nav: () => navigation.navigate('CS')},
    {title: 'SE', nav: () => navigation.navigate('SE')},
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
        {btns.map((v, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                addProgram(v.title);
                navigation.navigate('SE');
              }}
              key={i}
              style={styles.Button}>
              <Text style={styles.ButtonText}>{v.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProgram: (data) => {
      dispatch({type: Actions.PROGRAM, payload: data});
    },
  };
};

export default connect(null, mapDispatchToProps)(Programs);

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
    elevation: 10,
    borderRadius: 4,
    // backgroundColor:'#2B1FF5'
    // backgroundColor:'#0CEAFF'
  },
  ButtonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});
