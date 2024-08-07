import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>My Course List</Text>
      <CourseForm/>
      <CourseList/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 32, 
    backgroundColor: 'grey',
    color: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    marginBottom: 32,
  }
})
