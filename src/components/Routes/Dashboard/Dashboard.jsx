import React from 'react';

import Filter from './Filter';
import Refunds from './Refund';
import Transactions from './Transactions';
import OverallHealth from './OverallHealth';
import LostTransactions from './LostTransactions';

import './dashboard.css'

export default props => {

    return(
        <div className="dashboard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}} >

            <Filter
                lastCall={props.lastCall}
                nextCall={props.nextCall} 
            />
            <Transactions 
                bar_data={props.bar_data}
                line_data={props.line_data}
            />
            <Refunds 
                bar_data={props.bar_data}
                line_data={props.line_data}
            />
            <LostTransactions
                bar_data={props.bar_data}
                line_data={props.line_data}
            />
            <OverallHealth 
                bar_data={props.bar_data}
                line_data={props.line_data}
            /> 

        </div>
    )
}