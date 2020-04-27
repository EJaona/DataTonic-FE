import axios from 'axios';

export const axiosWithAuth = _ => {
    return axios
        .create({
           
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
}