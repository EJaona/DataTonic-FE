import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Nav/Header';
import Footer from './components/Footer/Footer';
import ErrorComponent from './components/Error';
import useInterval from './Utils/useIntervalHook';
import Login from './components/Routes/Home/Login';
import { axiosWithAuth } from './Utils/axiosWithAuth';
import { Authenticate } from './Utils/Authentication';
import Register from './components/Routes/Home/Register';
import Dashboard from './components/Routes/Dashboard/Dashboard';
import './App.css';

const App = _ => {


  const [ data, setData ] = useState({})
  const [ lineData, setLineData ] = useState({})
  const [lostRefund, setLostRefund] = useState({})

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

      const res = await axios.get("https://datatonic-api.herokuapp.com/api/data", {headers:{Authorization: localStorage.getItem('token')}})

      console.log('res=>data: ', res)

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

      setLostRefund({
        datasets:[
          {
            data: res.data.data[0].lost_transactions.split(', '),
            label: 'Amazon',
            borderColor: 'blue',
            fill: false,
            lineTension: 0
          },
          {
            data: res.data.data[1].lost_transactions.split(', '),
            label: 'Microsoft',
            borderColor: 'yellow',
            fill: false,
            lineTension: 0
          },
          {
            data: res.data.data[2].lost_transactions.split(', '),
            label: '"Logitech"',
            borderColor: 'green',
            fill: false,
            lineTension: 0
            
          },
          {
            data: res.data.data[3].lost_transactions.split(', '),
            label: '"Intel"',
            borderColor: 'red',
            fill: false,
            lineTension: 0
            
          },
          {
            data: res.data.data[4].lost_transactions.split(', '),
            label: 'Google',
            borderColor: 'black',
            fill: false,
            lineTension: 0
            
          },
          
        
        ],
        labels: ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am', '6:00a,', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm'],

        yAxis: {
          
        }
      })

    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className="App">

        <div className="container">

          <Header />

          <Switch>

            <Route exact path="/" component={ Login } />

            <Authenticate
              path="/health_dashboard"
              dataLabels={data.labels}
              lastCall={lastCall}
              nextCall={nextCall}
              bar_data={data} 
              line_data={lineData}
              getData={getData}
              Component={ Dashboard }
              lostRefund={ lostRefund }
            />

            <Route path="/register" component={ Register } />
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
