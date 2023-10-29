import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from './Alert';
import { useState } from 'react';
import Navbar from './Navbar';
export default function Root() {    
const [mode, setMode] = useState('light');



const toggleMode = ()=>{
  if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#212529';
    document.title="TextUtils-DarkMode";

    setTimeout(()=>{
      document.title="TextUtils is Amazing";

    },2000);
    setTimeout(()=>{
      document.title="Install TextUtils Now";

    },1000);

  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.title="TextUtils-LightMode"


  }
}
const toggleMode2 = ()=>{
  if (mode === 'light'){
    setMode('info')

    document.body.style.backgroundColor = '#0dcaf0';
    document.title="TextUtils-BlueMode"

  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.title="TextUtils-LightMode"


  }
}

const toggleMode3 = ()=>{
  if (mode === 'light'){
    setMode('secondary')

    document.body.style.backgroundColor = '#6c757d';
    document.title="TextUtils-GreyMode"


  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.title="TextUtils-LightMode"


  }
}

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
      <Outlet/>
    </>
  )
}
