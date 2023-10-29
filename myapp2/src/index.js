import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root'
// import App from './App';
import Home from './components/Home'
import About from './components/About'
import News from './components/News';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path=""element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="news" element={<News/>}/>


    </Route>


  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
