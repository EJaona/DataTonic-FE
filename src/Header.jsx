import React from 'react';
import { NavLink } from 'react-router-dom';


export default props => {
    
    return(

        <div className="header">

            <nav className="navigation">

                <NavLink to="/">
                    <img src='logo goes here' alt="Data Tonic logo"/>
                </NavLink>

                {/*Need a vertical bar between logo and other links */}

                <NavLink to="/health_dashboard"> Health Dashboard </NavLink>
                <NavLink to="/live_score"> Live Score </NavLink>
                <NavLink to="/statistics"> Statistics </NavLink>
                <NavLink to="/analytics"> Analytics </NavLink>
                <NavLink to="/forecast"> Forecast </NavLink>

            </nav>

            <p className="user-name">
                {/*user name goes here, comes as a prop*/}
            </p>

        </div>

    )
}