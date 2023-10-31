import './App.css';
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Root from './components/Root'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path=""element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="news" element={<News pageSize={5}/>}/>


    </Route>


  )
)
function App() {
  return (
    <RouterProvider router={router} />

  );

}

export default App;
