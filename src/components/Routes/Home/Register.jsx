import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './credentials.css'

export default props => {

    const [name, setName] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{

            const res = await axios.post('https://datatonic-api.herokuapp.com/api/users/register', {name, username, password})
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', res.data.username)

            // clear fields
            setName('')
            setUserName('')
            setPassword('')

            props.history.replace('/')

        }catch(err){
            console.error(err)
        }



    }


    return(

        <div className="credentials">
            <form onSubmit={handleSubmit}>
                <h1>Register . . . . </h1>
                <input type="text" placeholder="name..." value={name} onChange={ e => setName(e.target.value)} />
                <input type="text" placeholder="username..." value={username} onChange={ e => setUserName(e.target.value)} />
                <input type="password" placeholder="password..." value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="submit" value='Submit'/>
                <Link to="/">Already have an account?</Link>

            </form>
        </div>
    )
}