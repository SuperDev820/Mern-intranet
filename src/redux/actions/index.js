import * as types from "./types";
import axios from 'axios'


export const login = ( user) => {
    return dispatch => axios.post('localhost:4000/login', {user: user})
        .then(response => {
            if(response.status == 200)
                dispatch({type: types.SAVE_AUTH, payload: response.data.user});
        })
    
}

export const register = (user) => {
    console.log('register');
    return (dispatch) => axios.post('http://localhost:5000/register', {user: user})
        .then(response => {
            if(response.status == 200)
                dispatch({type: types.SAVE_AUTH, payload: response.data.user});
        })
}
