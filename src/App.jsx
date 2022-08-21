import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"
import Notfound from "./pages/notFound/Notfound"
import Footer from "./components/Footer"
import Navbar from './components/Navbar'
import Login from './pages/LoginForm/LoginForm'

import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  const [user, setUser] = useState(false);
  if(!user) return <Login setUser = {setUser}/>
  return (
    
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='gallery' element={<Gallery />}/>
        <Route path='plans' element={<Plans />}/>
        <Route path='trainers' element={<Trainers />}/>
        <Route path='*' element={<Notfound />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
      <Footer />
      

    </BrowserRouter>
  )
}

export default App
