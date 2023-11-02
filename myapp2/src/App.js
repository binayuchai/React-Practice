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
      <Route exact path="news/entertainment" element={<News key="entertainment" category='entertainment'/>}/>
      <Route exact path="news/sports" element={<News key="sports" category='sports' />}/>
      <Route exact path="news/business" element={<News key="business" category='business' />}/>




    </Route>


  )
)
function App() {
  return (
    <RouterProvider router={router} />

  );

}

export default App;
