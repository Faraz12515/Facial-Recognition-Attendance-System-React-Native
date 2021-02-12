import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

function ClassList({userData}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {userData.courses_assigned ? (
          userData.courses_assigned.map((v, i) => {
            return (
              <TouchableOpacity
                key={i + ''}
                style={[styles.List, {marginBottom: 10}]}>
                <View style={styles.textView}>
                  <Text style={styles.text}>{v}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View>
            <Text style={{fontSize: 20, color: '#0000'}}>No Courses Found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.user,
  };
};

export default connect(mapStateToProps)(ClassList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  List: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '94%',
    height: 60,
    borderRadius: 5,

    // alignItems: 'stretch',
    // flexDirection: 'column',
    // justifyContent: 'center',

    marginTop: 14,
    backgroundColor: '#fff',
    elevation: 10,
  },
  textView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '5%',
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});
