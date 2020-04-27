import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import './graphDisplay.css'

export default props => {

    return(
        <div className="transactions">
            <h1>
                {props.title} <i className="fa fa-info-circle " ></i>
            </h1>

            <div className="data">
                <div className="graph bar-graph">

                    <Bar
                        data={props.bar_data}
                        options={{

                            responsive: true,
                            legend: {
                            position: 'bottom',
                            
                            },
                            title:{
                            display: true,
                            text: `${props.barGraphText}`,
                            position: 'left'
                            },

                            scales: {
                                yAxes: [
                                    
                                ]
                            }
                        }}   
                    />
                </div>

                <div className="graph line-graph">

                    <Line
                        data={props.line_data}
                        options={{

                            responsive: true,
                            legend: {
                            position: 'bottom',
                            
                            },
                            title:{
                            display: true,
                            text: `${props.lineGraphText}`,
                            position: 'left'
                            },

                            scales: {
                                yAxes: [
                                    
                                ]
                            }
                        }}   
                    />
                </div>

            </div>    

        </div>
    )
}