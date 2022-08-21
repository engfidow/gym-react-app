import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/home/Home.css"
import img from "../images/main_header.png"
const MainHeader = () => {
  return (
    <div className="main-header">
        
        <div className="container main-header-container">
            <div className="main-header-left" data-aos='fade-down' data-aos-delay='500'>
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join The Legeends Of The Fitness World</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptate 
                    neque optio magni labore aut reiciendis excepturi possimus consequatur 
                    molestias!
                </p>
                <Link to="/plans" className='btn lg'> Get Start</Link>
            </div>

            <div className="main-header-right" data-aos='fade-down' data-aos-delay='700'>
                <div className="main-header-circle"></div>
                <div className="main-header-image">
                    <img src={img} alt="main header"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader