//Action Creators
import * as types from './actionTypes';

export function createCourse(course) {
    return {type: types.CREATE_COURSE, course}; //Right hand side can be ommited if it matches the left. course: course.
}

