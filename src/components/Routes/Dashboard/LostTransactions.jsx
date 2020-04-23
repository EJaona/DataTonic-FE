import React from 'react';
import { Line } from 'react-chartjs-2';

export default props => {

    return(
        
        <div className="lost-transactions">

            <h1>Lost Transactions & Refunds {/* need info circle */} </h1>
            <div className="data">
                <Line />
            </div>

        </div>
    )
}