//Action Creators
import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses}; //Right hand side can be ommited if it matches the left. course: course.
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course}; //Right hand side can be ommited if it matches the left. course: course.
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course}; //Right hand side can be ommited if it matches the left. course: course.
}

//Thunk always return a function that accepts a dispatch
export function loadCourses() {
    return function(dispatch){
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        return CourseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}

