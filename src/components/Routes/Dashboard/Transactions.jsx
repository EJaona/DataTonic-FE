import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default props => {

    return(

        <div className="transactions">

            <h1>Transactions {/* need info circle */} </h1>
            <div className="data">
                
                <Bar />
                <Line />

            </div>    

        </div>

    )
}