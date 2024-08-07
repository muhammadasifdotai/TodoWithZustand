import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CourseForm from './src/components/CourseForm';
import CourseList from './src/components/CourseList';
import AppNavigation from './src/routes/AppNavigation';

export default function App(): JSX.Element {
  return (
      <AppNavigation/>
  )
}

const styles = StyleSheet.create({
})
