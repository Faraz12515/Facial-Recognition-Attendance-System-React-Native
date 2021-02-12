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

<<<<<<< HEAD
function ClassList({userData, navigation}) {
=======
export default function ClassList() {
  const listData = [
    {
      txt: 'Class Name',
    },
  ];
>>>>>>> ba2943569173036a95e8893c7408f66ba030392e
  return (
    <View style={styles.container}>
      <ScrollView>
        {userData.classes ? (
          userData.classes.map((v, i) => {
            return (
              <TouchableOpacity
                key={i + ''}
                onPress={() => navigation.navigate('Attendance', {data: v})}
                style={[
                  styles.List,
                  {
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  },
                ]}>
                <View style={styles.textView}>
                  <Text style={styles.text}>{v.program}</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>{v.course}</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.text}>{v.semester}</Text>
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
