import React, { useState } from "react";
import { Text, View } from "react-native";
import useCourseStore from "../app/courseStore";

const CourseForm =() => {
    // here we use addCourse: from the Store.
    // useCourseStore: giving me a state. and we said sate dot addCourse.
    // below line doesn't affect anything in my component any state, so even if anything else changes in the state like the remove course or any other thing which is available in your state gets changed it doesn't effect the this component itself the form is going to be only and only binded not really ideal case of saying it is as binded but this will not impact(below line), (that is changed in the store, it doesn't affect this component itself 
    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState('');
    console.log('CourseForm Rendered');

    // now creating a simple function which is going to handle whenever the data comes in this.

    return (
        <View>
        <Text>Alhamdulillah</Text>
        </View>
    )
}

export default CourseForm;

// 4: 03