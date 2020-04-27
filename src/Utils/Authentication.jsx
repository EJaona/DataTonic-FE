import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const Authenticate = ({ Component, dataLabels, lastCall, nextCall, bar_data, line_data, getData, lostRefund }) => (

   
    <Route render={ props =>
        localStorage.getItem('token') ?

            <Component 
                {...props} 
                dataLabels={dataLabels}
                lastCall={lastCall}
                nextCall={nextCall}
                bar_data={bar_data}
                line_data={line_data}
                getData={getData}
                lostRefund={lostRefund}
            />:
            <Redirect to="/" />
    } /> 
    
)