import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Root from './components/Root'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');





  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {path:"",element:<TextForm  heading="Enter the text to analyze" mode={mode}/>},
        {path:"about",element:<About/>}


      ]


      

    },

  ])

  
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route path="" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/>
  //       {/* <Route path="about" element={<About/>}/> */}
  
  
  
  
  //     </Route> 
  
  
  //   )
  // )
  

  return (
        <RouterProvider router={router} />

 
    
  );
}

export default App;
