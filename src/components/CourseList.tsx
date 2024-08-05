import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import useCourseStore from '../app/courseStore';
import CheckBox from '@react-native-community/checkbox';

const CourseList = () => {
  // useCourseStore: give us callback function, callBack function will have the state, 
    //({}): In here we can bring all the data, 
    // .. First we have 'coursed' that is coming from 'state' every thing is coming from store.
    // .. Whenever I say 'state.courses' I mean to say that I'm bringing this data from my store itself, 
    // All the data which I want or all the features or the actions also that I need are coming in directly from here.
    // .. below is the code for state mangement.
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.courseItem}>
        <CheckBox
          value={item.completed}
          onValueChange={() => toggleCourseStatus(item.id)}
        />
      <Text style={styles.courseTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => removeCourse(item.id)} style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
    courseItem: {
         backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 330, 
        // iOS shadow properties
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        // Android shadow property
        elevation: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 16, 
        padding: 16,
        fontWeight: 'bold',
      },
  courseTitle: {
    flex: 1,
    fontSize: 16,
  },
  deleteBtn: {
    borderRadius: 5,
  },
  deleteBtnText: {
    padding: 8, // 0.5rem -> 8px
    color: 'white',
    backgroundColor: '#ff0000cc',
    borderRadius: 5,
    borderWidth: 0,
  },
});

export default CourseList;