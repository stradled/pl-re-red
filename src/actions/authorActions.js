//Action Creators
import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors) {
    return {type: types.LOAD_AUTHOR_SUCCESS, authors}; //Right hand side can be ommited if it matches the left. course: course.
}

//Thunk always return a function that accepts a dispatch
export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}