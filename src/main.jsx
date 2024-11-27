import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/Home.jsx'
import Root from './routes/Root.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InquiryForm from './components/InquiryForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/inquiryform',element:<InquiryForm/>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

