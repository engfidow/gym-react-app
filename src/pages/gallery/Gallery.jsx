import React from 'react'
import Header from '../../components/Header'
import { Images } from '../../data'
import Headerimage from "../../images/header_bg_2.jpg"
import "./gallary.css"
const Gallery = () => {
 
  
  return (
    <>
      <Header title= "Gelary" image= {Headerimage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis reprehenderit vel dignissimos modi dolorem esse 
        necessitatibus cum  
      </Header>
      <section className="gallery" data-aos='fade-up' data-aos-delay='600'>
        <div className="container gellery__container">
          
           {
              Images.map(({image}, index) => {
                return (
                  <article key={index}>
                  <img src={image} alt= "gellery" />
                </article>
                )
              })
            }
        </div>
      </section>
    </>
  )
}

export default Gallery