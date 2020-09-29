import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';

const termMap = { F: "Fall", S: "Spring", W: "Winter"};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);


const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState("Fall");
    
    const termCourse = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
    <ScrollView>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <View style={styles.courseList}>
        { termCourse.map(course => <Course key={course.id} course={course} />) }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default CourseList;