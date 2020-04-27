import React from 'react';

import Filter from './Filter/Filter';
import GraphDisplay from './GraphDisplay/GraphDisplay';
import OverallHealth from './GraphDisplay/OverallHealth';
import LostTransactions from './GraphDisplay/LostTransactions';

import './main.css'

export default props => {

    return (

        <div className="dashboard"  >
            
            <Filter
                dataLabels={ props.dataLabels }
                lastCall={ props.lastCall }
                nextCall={ props.nextCall } 
                getData={ props.getData }
            />
            <GraphDisplay
                title="Transactions"
                barGraphText="Number of Transactions"
                lineGraphText="Success Rate"
                bar_data={props.bar_data}
                line_data={props.line_data}
            />
            <GraphDisplay
                title="Refunds"
                lineGraphText="Success Rate"
                barGraphText="Number of Transactions"
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