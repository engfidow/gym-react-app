import React from 'react'
import Header from '../../components/Header'
import { trainers } from '../../data'

import "./trainer.css"
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import Trainer from '../../components/Trainer'
import Headerimage from "../../images/header_bg_4.jpg"
const Trainers = () => {
  return (
    <>
      <Header title= "Trainers" image= {Headerimage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis reprehenderit vel dignissimos modi dolorem esse 
        necessitatibus cum  
      </Header>
      <section className="trainers" data-aos='fade-up' data-aos-delay='600'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) =>{
              return(
              <Trainer key = {id} image = {image}  name = {name} job ={job} socials ={ [
                {icon: <BsInstagram/> , link: socials[0]},
                {icon: <FaFacebookF/> , link: socials[1]},
                {icon: <FaLinkedinIn/> , link: socials[2]},
                {icon: <BsTwitter/> , link: socials[3]}
              ]}/>

              
            )})
          }
        </div>
      </section>
    </>
  )
}

export default Trainers