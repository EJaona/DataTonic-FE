import React from 'react';



export default props => {

    const style = {
        display: 'flex',
        border: '1px solid black'
    }

    return(
        <div className="filter">

            <div className="dashboard-header" style={{...style, justifyContent: 'space-between'}}>
                <h1> Health Dashboard</h1>

                <div className="status" style={style}>
                    <p> Next refresh: 115s {/* time till next auto api call */} </p>
                    <i> {/*Refresh icon from fontawesome */} </i>
                    <i> {/*Pause icon from fontawesome */} </i>
                    <p>Last refresh: 5 mins. ago{/* time from last api call */} </p>
                </div>
            </div>

            <form>

                <select className="filter-input">
                    <option value="Amazon"> Amazon </option>
                    <option value="Intel"> Intel </option>
                    <option value="Google"> Google </option>
                    <option value="Microsoft"> Microsoft </option>
                    <option value="Logitech"> Logitech </option>
                    {/*Dynamically render options elements with data from BE */}
                </select>

                <select className="filter-input">
                    <option value="all"> All </option>
                    {/*Dynamically render options elements with data from BE */}
                </select>

                <input type="datetime-local" name="" id="" className="filter-input"/>
                <input type="datetime-local" name="" id="" className="filter-input"/>

            </form>


        </div>
    )
}