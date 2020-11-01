import * as types from "./types";
import axios from 'axios'
import { server_url } from '../../constants'

export const login = ( user) => {
    return (dispatch) => axios.post(server_url+'/login', {user: user})
        .then(response => {
            if(response.status === 200)
                dispatch({type: types.SAVE_AUTH, payload: response.data.user});
        })
    
}

export const register = (user) => {
    console.log('register');
    return (dispatch) => axios.post('http://localhost:5000/register', {user: user})
        .then(response => {
            if(response.status === 200)
                dispatch({type: types.SAVE_AUTH, payload: response.data.user});
        })
}

export const checkSubdomain = (subdomain) => {
    return (dispatch) => axios.post('http://localhost:5000/check/subdomain', { subdomain })
        .then( response => {
            if(response.status === 200)
                if (response.data.success)
                    dispatch({type: types.CHECK_SUBDOMAIN, payload: true})
                else dispatch({type: types.CHECK_SUBDOMAIN, payload: false})
            else dispatch({type: types.CHECK_SUBDOMAIN, payload: false})
        });
}