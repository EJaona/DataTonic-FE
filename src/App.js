import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header';
import Footer from './components/Footer/Footer';
import ErrorComponent from './components/Error';
import Login from './components/Routes/Home/Login';
import useInterval from './Utils/useIntervalHook';
import { axiosWithAuth } from './Utils/axiosWithAuth';
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


  useEffect( () => {
    getData()
  },[])


  useInterval(() => {

    nextCall > 0 ? setNextCall(--nextCall) : setNextCall(300)
  }, 1000)


  const getData = async () => {

    try{

      const res = await axiosWithAuth().get()

      console.log('res=>data: ',res.data)

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
            data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],// I'd like to have max at 100
            label: 'Average',
            borderColor: 'blue',
            fill: false,
            lineTension: 0
          },
          {
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            label: 'Warning Pivot',
            borderColor: 'yellow',
            fill: false,
            lineTension: 0
          },
          {
            data: [65, 63, 64, 62, 70, 90, 80, 85, 90, 90, 70, 67, 82, 78, 87, 86, 80, 80, 83], // Didn't know how to classify this data in the BE. . . sqlite3 has no support for an array. I dropped a string that i'll turn into an array upon receiving the response from api call
            borderColor: 'green',
            fill: false,
            lineTension: 0
            
          },
        
        ],
        labels: ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am', '6:00a,', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm'],

        yAxis: {
          
        }
      })

    }catch(err){
      console.log(err.message)
    }
  }
  
//  console.log(data)
  return (
    <div className="App">

        <div className="container">

          <Header />

          <Switch>

            <Route exact path="/" component={ Login } />

            <Route
              path="/health_dashboard" 
              render={ _ => 

                <Dashboard
                  dataLabels={data.labels}
                  lastCall={lastCall}
                  nextCall={nextCall}
                  bar_data={data} 
                  line_data={lineData}
                  getData={getData}
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
