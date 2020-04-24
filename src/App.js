import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header';
import Footer from './components/Footer/Footer';
import ErrorComponent from './components/Error';
import Home from './components/Routes/Home/Home';
import useInterval from './Utils/useIntervalHook';
import Dashboard from './components/Routes/Dashboard/Dashboard';

import './App.css';

const App = _ => {


  const [ data, setData ] = useState({})

  const [ lineData, setLineData ] = useState({})

  let [lastCall, setLastCall] = useState(0)
  let [nextCall, setNextCall] = useState(300)


  useInterval(() => {
    setLastCall(++lastCall)
  }, 60000)// will update minutely

  useEffect(() => {

    if(nextCall === 0){
      
    }

  },[nextCall])

  useInterval(() => {

    nextCall > 0 ? setNextCall(--nextCall) : setNextCall(300)
  }, 1000)

  useEffect( () => {
    ( async () => {

      try{

        const res = await axios.get('http://localhost:8000')

        setData({
          labels: res.data.data.map(data => data.company),
          datasets: [
            {
              label: 'Success',
              data: res.data.data.map(data => data.success),
              backgroundColor: ['green','green','green','green','green']
            },
            {
              label: 'Error',
              data: res.data.data.map(data => data.error),
              backgroundColor: ['red', 'red','red', 'red','red']
            },
            {
              label: 'Warning',
              data: res.data.data.map(data => data.warning),
              backgroundColor: ['yellow', 'yellow', 'yellow', 'yellow', 'yellow']
            }
          ]
        })

        setLineData({
          datasets:[
            {
              data: [80, 80, 80, 80, 80, 80],
              label: 'Average',
              borderColor: 'blue',
              fill: false,
              lineTension: 0
            },
            {
              data: [60, 60, 60, 60, 60, 60],
              label: 'Warning Pivot',
              borderColor: 'yellow',
              fill: false,
              lineTension: 0
            },
            {
              data: [65, 55, 70, 65, 80, 55, 40, 70, 80, 45, 60, 40], // Didn't know how to classify this data in the BE
              borderColor: 'green',
              fill: false,
              lineTension: 0
              
            }
          ],
          labels: ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am']
        })

      }catch(err){
        console.log(err.message)
      }
    })()
  },[])
  
 console.log(data)
  return (
    <div className="App">

        <div className="container">

          <Header />

          <Switch>
            <Route exact path="/" component={ Home } />

            <Route
              path="/health_dashboard" 
              render={ _ => 

                <Dashboard
                  lastCall={lastCall}
                  nextCall={nextCall}
                  bar_data={data} 
                  line_data={lineData}
                /> 

              }
              />

            <Route path="/live_score" component={ ErrorComponent } />
            <Route path="/statistics" component={ ErrorComponent } />
            <Route path="/analytics" component={ ErrorComponent } />
            <Route path="/forecasts" component={ ErrorComponent } />
          </Switch>

          <Footer />
          
        </div>

    </div>
  );
}

export default App;
