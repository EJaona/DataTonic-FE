import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default _ => {

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

        }catch(err){
            console.error(err)
        }



    }


    return(

        <div className="login">
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="name..." value={name} onChange={ e => setName(e.target.value)} />
                <input type="text" placeholder="username..." value={username} onChange={ e => setUserName(e.target.value)} />
                <input type="password" placeholder="password..." value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="submit" value='Submit'/>
                <p>
                    If you're already registered, please provide your username and password.
                    If you are not, please fill in all fields and submit
                </p>

            </form>
        </div>
    )
}