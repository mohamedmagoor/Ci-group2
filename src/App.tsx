
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import Gallery from './components/Gallery/Gallery'
import ContactUs from './components/ContactUs/ContactUs'
import Dressing from './components/Dressing/Dressing'
import Interior from './components/Interior/Interior'
import Doors from './components/Doors/Doors'
import Kitchens from './components/Kitchens/Kitchens'
     

const routers = createBrowserRouter([
  { path:"/", element: <Layout/>, children:[
    {index:true,element: <Home/> },
    {path:"about",element:<AboutUs/>},
    {path:"gallery/dressing",element:<Dressing/>},
    {path:"gallery/interior",element:<Interior/>},
    {path:"gallery/doors",element:<Doors/>},
    {path:"gallery/kitchens",element:<Kitchens/>},
    {path:"gallery",element:<Gallery/>},
    {path:"contact",element:<ContactUs/>},
    {path:"*",element:<NotFound/>},
  ]}

])

function App() {
  

  return <>
   
    <RouterProvider router={routers}></RouterProvider>   
    </>
 
}

export default App
