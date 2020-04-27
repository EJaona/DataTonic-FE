import React, { useEffect } from 'react';

import '../Filter/filter.css'


export default ({ getData, nextCall, lastCall, count, dataLabels }) => {

    const style = {
        display: 'flex',
        border: '1px solid black',
        // width: '35%'
    }

    const handleClick = _ => {
        
        getData()
        window.location.reload(false)
    }

    const handleDropDown = e => {

        e.target.classList.toggle('opened')
    }

    useEffect(() => { // this is to make the automatic api call when next refresh time: 0. Moved from app because i can take advantage of the window reload

        if(lastCall === 5){
            handleClick()
        }

    }, [lastCall])

    return(
        <div className="filter">

            <div className="dashboard-header" >
                <h1> Health Dashboard</h1>

                <div className="status" >
                    <p> Next refresh: {nextCall}s {/* time till next auto api call.*/} </p>
                    <i class="fas fa-sync" onClick={handleClick} />
                    <i class="fas fa-pause" />
                    <p>Last refresh: {lastCall} { count === 1? 'min': 'mins'}. ago{/* time from last api call.*/} </p>
                </div>
            </div>

            <form>

                <div className="select-container">
                    <i class="fas fa-angle-down fa-2x" />
                    <select className="filter-input select" >
                        {dataLabels && dataLabels.map(label => <option value={label} > {label} </option> )}
                        
                        {/*Dynamically render options elements with data from BE */}
                    </select>
                </div>

               
                <div className="select-container">
                    <i class="fas fa-angle-down fa-2x" onClick={e => handleDropDown(e)}/>
                    <select className="filter-input select">
                        <option value="all"> All </option>
                        {/*Dynamically render options elements with data from BE */}
                    </select>
                </div>

                <input type="datetime-local" className="filter-input date-time"/>
                <input type="datetime-local" className="filter-input date-time"/>

            </form>


        </div>
    )
}