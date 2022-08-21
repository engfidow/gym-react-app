import React from 'react'

const Header = ({title, image, children}) => {
  return (
    <header  data-aos="zoom-in-down" data-aos-delay='600'>
        <div className=" header__container">
            <div className="header__container__bg">
                <img src= {image} alt="header" />
            </div>
            <div className="container header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header
