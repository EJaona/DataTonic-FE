import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import './credentials.css'

export default props => {

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{

            const res = await axios.post('https://datatonic-api.herokuapp.com/api/users/login', { username, password })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', res.data.username)

            // clear fields
            setUserName('')
            setPassword('')
            props.history.replace('/health_dashboard')



        }catch(err){
            console.error(err)
        }



    }


    return(

        <div className="credentials">
            <form onSubmit={handleSubmit}>
                <h1>Login . . . .</h1>
                <input type="text" placeholder="username..." value={username} onChange={ e => setUserName(e.target.value)} />
                <input type="password" placeholder="password..." value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="submit" value='Submit'/>
                <Link to="/register"> Need to register? </Link>

            </form>
        </div>
    )
}