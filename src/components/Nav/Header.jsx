import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css'


export default props => {

    

    if(localStorage.getItem('token')){
        return(

            <div className="header" >

                <nav className="navigation">

                    <NavLink to="/" className='logo-link'>
                        <img src={require('../../img/logo.svg')} alt="Data Tonic logo"/>
                    </NavLink>

                    {/* unicode for vertical bar, no icon available for it. Hope it doesn't cause a styling issue 🤞 */}
                    {/* I can also use the pipe character '|' instead... We'll see */}
                    {/* Pipe character might cause less confusion for other devs?! */}

                    {/* I just ended up going with styling the right border of 'logo-link' to create the vertical line */}

                    <NavLink className='nav-link' to="/health_dashboard"> Health Dashboard </NavLink>
                    <NavLink className='nav-link' to="/live_score"> Live Score </NavLink>
                    <NavLink className='nav-link' to="/statistics"> Statistics </NavLink>
                    <NavLink className='nav-link' to="/analytics"> Analytics </NavLink>
                    <NavLink className='nav-link' to="/forecast"> Forecast </NavLink>

                </nav>

                <p className="user-name">
                    { localStorage.getItem('username') || 'John Doe' } <i class="fas fa-sign-out-alt" onClick={_ => localStorage.clear() } />
                </p>


            </div>

    )}else {

        return(

            <div className="header" >

                <nav className="navigation">

                    <NavLink to="/" className='logo-link'>
                        <img src={require('../../img/logo.svg')} alt="Data Tonic logo"/>
                    </NavLink>

                    {/* unicode for vertical bar, no icon available for it. Hope it doesn't cause a styling issue 🤞 */}
                    {/* I can also use the pipe character '|' instead... We'll see */}
                    {/* Pipe character might cause less confusion for other devs?! */}

                    {/* I just ended up going with styling the right border of 'logo-link' to create the vertical line */}

                    <NavLink className='nav-link' to="/"> Login </NavLink>
                    <NavLink className='nav-link' to="/register"> Register </NavLink>
                    

                </nav>


            </div>

    )

    }
}