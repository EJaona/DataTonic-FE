import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default props => {

    return(

        <div className="refund">

            <h1>Refunds {/* need info circle */} </h1>

            <div className="data">

                <div className="graph">

                    <Bar
                        data={props.bar_data}
                        options={{

                            responsive: true,
                            legend: {
                            position: 'bottom',
                            
                            },
                            title:{
                            display: true,
                            text: 'Number of Transactions',
                            position: 'left'
                            },
                            // relativeSize: true,
                        }}
                    />
                </div>

                <div className="graph">

                    <Line
                        data={props.line_data}
                        options={{

                            responsive: true,
                            legend: {
                            position: 'bottom',
                            
                            },
                            title:{
                            display: true,
                            text: 'Success Rate',
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