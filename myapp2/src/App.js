import './App.css';
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Root from './components/Root'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
const apiKey=process.env.REACT_APP_NEWS_API;
console.log(apiKey)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path=""element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route exact path="news/entertainment" element={<News key="entertainment" apiKey={apiKey} category='entertainment'/>}/>
      <Route exact path="news/sports" element={<News key="sports" apiKey={apiKey} category='sports' />}/>
      <Route exact path="news/business" element={<News key="business"  apiKey={apiKey} category='business' />}/>




    </Route>


)
)
function App() {
  return (
    <RouterProvider router={router} />

  );

}

export default App;
