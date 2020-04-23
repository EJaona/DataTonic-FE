import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import Header from './components/Header';

import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = _ => {


  const [ data, setData ] = useState({

    labels: [ // My data will have to have a company name property. Look over the array and dump each name here 
      'Amazon',
      'Microsoft',
      'Logitech',
      'Intel',
      'Google'
    ],
    datasets:[// Each object will have success & Error property. Loop and dump in respective array, the values.
      {
        label: 'Success',
        data:[
          579569,
          345067,
          102938,
          948573,
          758694

        ]
      },
      {
        label: "error",
        data:[
          15832,
          39458,
          39485,
          39485,
          29384
        ],
        backgroundColor: 'pink'
      }
    ],
    

  })// End of state

  const [ lineData, setLineData ] = useState({
    datasets: [{
        data: [80, 80, 80, 80, 80, 80],
        label: 'Average',
        borderColor: 'blue',
        fill: false,
        lineTension: 0
    }, {
        data: [60, 60, 60, 60, 60, 60],
        label: 'Warning Pivot',
        borderColor: 'yellow',
        fill: false,
        lineTension: 0
    },{
      data: [65, 55, 70, 65, 80, 55, 40, 70, 80, 45, 60, 40],
      borderColor: 'green',
      fill: false,
      lineTension: 0
      
    }],
    labels: ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am']
  })

  return (
    <div className="App">

        <Header />

        <Switch>
          <Route path="/" component={ Home } />
          <Route path="/heath_dashboard" component={ Dashboard } />
          <Route path="/live_score" component={ Score } />
          <Route path="/statistics" component={ Statistics } />
          <Route path="/analytics" component={ Analytics } />
          <Route path="/forecasts" component={ Forecast } />
        </Switch>

      
    </div>
  );
}

export default App;
