import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {connect} from 'react-redux';
import {ClassList} from '.';

function AddClass({navigation, userData, route}) {
  console.log('User Data', userData);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    }

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isFocused]);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#FEFEFE" /> */}
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
          {userData.name}
        </Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <ClassList navigation={navigation} />
        </View>
      </ScrollView>
      <View
      // style={{
      //   position: 'absolute',
      //   bottom: '8%',
      //   alignSelf: 'center',
      //   width: '100%',
      // }}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Programs')}>
          <View style={{marginVertical: 15}}>
            <Text style={styles.ButtonText}>Add{'\n'}Class</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.user,
  };
};

export default connect(mapStateToProps)(AddClass);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e4c9',
  },
  Button: {
    position: 'absolute',
    right: 18,
    bottom: 15,

    backgroundColor: '#00a14e',
    marginVertical: 15,
    height: 70,
    width: 70,

    elevation: 10,
    borderRadius: 50,
  },
  ButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
