import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function ClassList() {
  const listData = [
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
    {
      txt: 'Dog',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {listData.map((v, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.List,
                {marginBottom: i == listData.length - 1 ? 16 : 0},
              ]}>
              <View style={styles.textView}>
                <Text style={styles.text}>{v.txt}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
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
