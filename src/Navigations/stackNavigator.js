import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
  AddClass,
  ClassList,
  Attendance,
  SignUp,
  Login,
  GetStarted,
  Morning,
  Evening,
  Programs,
  CS,
  SE,
  Course,
  Section,
  SectionA,
  SectionB,
  Theory,
  Lab,
  FirstYear,
  SecondYear,
  ThirdYear,
  Register,
  FourthYear,
  Semesters,
  ThirdAndFourthSemester,
  FifthAndSixthSemester,
  SeventhAndEightSemester,
  SemesterCourses,
  AddStudent,
} from '../screens';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

function StackNavigator(props) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Addclass" component={AddClass} />
      <Stack.Screen name="Classlist" component={ClassList} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="AddStudent" component={AddStudent} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Morning"
        component={Morning}
        options={{
          title: 'Morning',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Evening"
        component={Evening}
        options={{
          title: 'Evening',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Programs"
        component={Programs}
        options={{
          title: 'Programs',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CS"
        component={CS}
        options={{
          title: 'CS',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SE"
        component={SE}
        options={{
          title: 'SE',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="1st Year"
        component={FirstYear}
        options={{
          title: '1st Year',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="2nd Year"
        component={SecondYear}
        options={{
          title: '2nd Year',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="3rd Year"
        component={ThirdYear}
        options={{
          title: '3rd Year',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="4th Year"
        component={FourthYear}
        options={{
          title: '4th Year',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Semesters"
        component={Semesters}
        options={{
          title: ' 1st & 2nd Semester',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ThirdAndFourthSemester"
        component={ThirdAndFourthSemester}
        options={{
          title: '3rd & 4th Semester',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="FifthAndSixthSemester"
        component={FifthAndSixthSemester}
        options={{
          title: '5th & 6th Semester',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SeventhAndEightSemester"
        component={SeventhAndEightSemester}
        options={{
          title: '7th & 8th Semester',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={{
          title: 'Section',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SectionA"
        component={SectionA}
        options={{
          title: 'SectionA',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SectionB"
        component={SectionB}
        options={{
          title: 'SectionB',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={{
          title: 'Course',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Theory"
        component={Theory}
        options={{
          title: 'Theory',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Theory',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Lab"
        component={Lab}
        options={{
          title: 'Lab',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SemesterCourse"
        component={SemesterCourses}
        options={{
          title: 'Lab',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#222',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.user,
  };
};

export default connect(mapStateToProps)(StackNavigator);
