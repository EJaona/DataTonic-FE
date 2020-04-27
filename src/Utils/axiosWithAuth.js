import axios from 'axios';

export const axiosWithAuth = _ => {
    return axios
        .create({
            baseURL: 'https://datatonic-api.herokuapp.com/',
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
}