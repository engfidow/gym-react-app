import React from 'react'
import Storyimg from "../../images/about1.jpg"
import Visionimg from "../../images/about2.jpg"
//import Misionimg from "../../images/about3.jpg"
import Header from '../../components/Header'
import "./about.css"
import Headerimage from "../../images/header_bg_1.jpg"
function About() {
  return (
    <>
    {/***header component */}
      <Header title= "About Us" image= {Headerimage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis reprehenderit vel dignissimos modi dolorem esse 
        necessitatibus cum  
      </Header>
      <section className="about__story" data-aos='fade-up' data-aos-delay='600'>
        <div className="container about_story_container">
          <div className="about_sectin_img">
            <img src={Storyimg} alt="storyimg" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
              corrupti recusandae iure molestias tempore voluptates, dolorem animi! 
              Corporis, neque veniam. molestias tempore voluptates, dolorem animi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
              laboriosam, modi alias possimus esse maiores minus deserunt est 
              architecto praesentium?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aspernatur 
              soluta id qui! Unde, consequuntur. adipisicing elit. Earum aspernatur 
            </p>
          </div>
        </div>
      </section>
      

     
     {/*** out vision ***/}
      <section className="about__vision" data-aos='fade-up' data-aos-delay='600'>
        <div className="container about_vision_container">
          
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
              corrupti recusandae iure molestias tempore voluptates, dolorem animi! 
              Corporis, neque veniam. molestias tempore voluptates, dolorem animi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
              laboriosam, modi alias possimus esse maiores minus deserunt est 
              architecto praesentium?
            </p>
           
          </div>
          <div className="about_sectin_img">
            <img src={Visionimg} alt="visionimg" />
          </div>
        </div>
      </section>

      {/*** out mision ***/}
      <section className="about__mision" data-aos='fade-up' data-aos-delay='600'>
        <div className="container about_mision_container">
          <div className="about_sectin_img">
            <img src={Storyimg} alt="storyimg" />
          </div>
          <div className="about-section-content">
            <h1>Our Mision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
              corrupti recusandae iure molestias tempore voluptates, dolorem animi! 
              Corporis, neque veniam. molestias tempore voluptates, dolorem animi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
              laboriosam, modi alias possimus esse maiores minus deserunt est 
              architecto praesentium?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aspernatur 
              soluta id qui! Unde, consequuntur. adipisicing elit. Earum aspernatur 
            </p>
          </div>
        </div>
      </section>
   
    </>
  )
}

export default About