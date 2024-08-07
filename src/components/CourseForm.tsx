import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useCourseStore from '../app/courseStore';
import styles from './style';
import useAuthStore from '../app/authStore';

const CourseForm = () => {
  // here we use addCourse: from the Store.
  // useCourseStore: giving me a state. and we said sate dot addCourse.
  // below line doesn't affect anything in my component any state, so even if anything else changes in the state like the remove course or any other thing which is available in your state gets changed it doesn't effect the this component itself the form is going to be only and only binded not really ideal case of saying it is as binded but this will not impact(below line), (that is changed in the store, it doesn't affect this component itself
  const {addCourse} = useCourseStore(state => state);
  // for Auth
  // const {updatedUserData} = useAuthStore(state => state)

  const [courseTitle, setCourseTitle] = useState('');
  console.log('CourseForm Rendered');

  // now creating a simple function which is going to handle whenever the data comes in this.
  // Iger courseTitle nhi hay to return chala do.
  // Function
  const handleCourseSubmit = () => {
    if (!courseTitle) return Alert.alert('Please add a Course Title');
    // iger courseTitle present hay to humay access ho jayee gi 'addCourse' ki. or addCourse may sirf required hay kay ap is may sirf 'Course' pass krain.
    // addCourse: ya aik object hay, or usually pulling up these objects from database.
    // .. In which two things are requireds. i. Id, ii. Title.
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    // once we have handled the course submit, the course is being added there is no point of keeping the title.
    setCourseTitle('');

    // const response = fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     username: 'emilys',
    //     password: 'emilyspass',
    //     // expiresInMins: 30, // optional, defaults to 60
    //   }),
    // })
    //   .then(res => res.json())

      
    // // addCourse(response);
    // updatedUserData(response);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        value={courseTitle}
        // what happen on the 'onChangeText', we capture the event 'e', once the event is being captured, us kay baad hum usay neechay wali line may used krain gay.
        // .. 'setCourseTitle' ya state hay, this will take the value from event'e',
        onChangeText={setCourseTitle}
        style={styles.formInput}
      />
      <TouchableOpacity
        onPress={handleCourseSubmit}
        style={styles.formSubmitBtn}>
        <Text style={styles.text}>Add Course</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourseForm;
