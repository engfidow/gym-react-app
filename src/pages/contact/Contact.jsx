import React from 'react'
import ContactForm from '../../components/ContactForm'
import Header from '../../components/Header'
import Headerimage from "../../images/header_bg_5.jpg"
import "./contact.css"

function Contact() {
  return (
    <div>
      {/***header component */}
      <Header title= "Contact" image= {Headerimage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis reprehenderit vel dignissimos modi dolorem esse 
        necessitatibus cum  
      </Header>
      <ContactForm/>
    </div>
  )
}

export default Contact