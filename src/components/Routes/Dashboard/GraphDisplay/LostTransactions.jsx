import React from 'react';
import { Line } from 'react-chartjs-2';

export default props => {

    return(
        
        <div className="lost-transactions">

            <h1>Lost Transactions & Refunds <i className="fa fa-info-circle " /> </h1>
            <div className="data">
                <Line
                    data={props.lostRefund}
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
    )
}