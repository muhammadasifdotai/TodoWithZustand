import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';
import useAuthStore from '../app/authStore';

export default function HomeScreen(): JSX.Element {
  const {logout} = useAuthStore(state => state)

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>My Course List</Text>
      <CourseForm/>
      <CourseList/>
      <TouchableOpacity style={styles.login} onPress={logout}>
                <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
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
    color: 'white'
  },
  login: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 15,
    backgroundColor: 'cyan',
},
text: {
    color: 'white',
    fontSize: 20,
}
})
