import React from 'react';
import ReactDOM from 'react-dom/client';
import Css from './Quizz/CSSquizz/Css'
import JSquizz from './Quizz/JSquiz/JSquizz'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter,RouterProvider,Route,Routes } from 'react-router-dom';
import Home from './Quizz/Home/Home';
import ReactQ from './Quizz/ReactQuizz/ReactQ';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
   
<BrowserRouter>

<Routes >
<Route
path='/' element={<Home/>}>
  </Route>
  <Route
path='/js' element={<JSquizz/>}>
  </Route>
  <Route
path='/css' element={<Css/>}>
  </Route>
  <Route
path='/react' element={<ReactQ/>}>
  </Route>
</Routes>
</BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
