import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//we will import BrowserRouter from 'react-router-dom' to make sure that the correct screen shows up whenever the url changes
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
   <BrowserRouter>
       <App />
   </BrowserRouter>
 , document.getElementById('root'))
