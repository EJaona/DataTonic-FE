import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default props => {

    const [headerStyles, setStyles] = useState({
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'space-between'
    })// Temp styles until styling is actually implemented
    
    return(

        <div className="header" style={headerStyles}>

            <nav className="navigation">

                <NavLink to="/">
                    <img src='logo goes here' alt="Data Tonic logo"/>
                </NavLink>

                &#124; 

                {/* unicode for vertical bar, no icon available for it. Hope it doesn't cause a styling issue 🤞 */}
                {/* I can also use the pipe character '|' instead... We'll see */}
                {/* Pipe character might cause less confusion for other devs?! */}

                <NavLink to="/health_dashboard"> Health Dashboard </NavLink>
                <NavLink to="/live_score"> Live Score </NavLink>
                <NavLink to="/statistics"> Statistics </NavLink>
                <NavLink to="/analytics"> Analytics </NavLink>
                <NavLink to="/forecast"> Forecast </NavLink>

            </nav>

            <p className="user-name">
                John Doe
                {/* user name goes here, will be dynamic */}
            </p>

        </div>

    )
}