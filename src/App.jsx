import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Categories from './Components/Categories'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import AnimeDetails from './Components/AnimeDetails'
import AnimeWacthing from './Components/AnimeWacthing'
import BlogDetails from './Components/BlogDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/reactLogo' element={<reactLogo/>}/>
        <Route path='/viteLogo' element={<viteLogo/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/AnimeDetails' element={<AnimeDetails/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/AnimeWacthing' element={<AnimeWacthing/>}/>
        <Route path='/BlogDetails' element={<BlogDetails/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
