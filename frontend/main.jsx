import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Toaster } from 'sonner'
import Register from './pages/Register'
import Login from './pages/Login'
import PostHouse from './pages/PostHouse'
import Browse from './pages/Browse'
import HouseDescription from './pages/HouseDescription'
import SearchResults from './pages/SearchResults'


const router=createBrowserRouter([{
  path:'/',
  element:<Home/>
},{
  path:'/register',
  element:<Register/>
},{
  path:'/login',
  element:<Login/>
},{
  path:'/postHouse',
  element:<PostHouse/>
},{
  path:'/browse',
  element:<Browse/>
},{
  path:'/description/:id',
  element:<HouseDescription/>
},{
  path:'/searchResults',
  element:<SearchResults/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <RouterProvider router={router}/>
   <Toaster/>
   </Provider>
  </StrictMode>,
)
