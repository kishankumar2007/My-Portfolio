import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Routes, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
