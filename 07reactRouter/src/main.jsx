import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import User from "./user/User.jsx";
import Github, {gitdataInfo} from "./github/Github.jsx";


// const router =createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children:[
//
//             {
//                 path :"",
//                 element: <Home  />
//             },
//             {
//                 path: "about",
//                 element : <About />
//             },
//             {
//                 path: "contact",
//                 element : <Contact/>
//             },
//             {
//                 path: "user/:userId",
//                 element : <User/>
//             },
//             {
//                 loader :{gitdataInfo},
//                 path: "github",
//                 element : <Github/>
//             }
//         ]
//     }
//
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:userid' element={<User />} />
            <Route
                loader={gitdataInfo}
                path='github'
                element={<Github />}
            />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>,
)
