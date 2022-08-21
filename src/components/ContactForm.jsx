import React from 'react'



import {MdEmail} from'react-icons/md'
import {RiWhatsappFill} from'react-icons/ri'
import {BsMessenger} from'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sectionead from './Sectionead';
import { AiFillCrown } from 'react-icons/ai';



const ContactForm = () => {



    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_iidsqnp', 'template_568hs9n', form.current, 'user_C2jkXqp3jcS1Yp6MSc9fe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });      
  };


   const [state, setState] = useState({
    name: "",
    email: "",
    massege: "",
  });
  
  const { name, email,  massege } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email ||  !massege) {
      toast.error("Please provide value in each input field");
    } else {

      
      
      setState({ name: "", email: "",massege: "" });
      toast.success("Form Submitted Successfully");
      e.target.reset()
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };




  return (
    <section id='contact'>
       <Sectionead icon={<AiFillCrown />} title="Get In Touc" className="title__icon"/>
       
       <div className="container contact-container">
       
         <div className="contact-options" data-aos="fade-right" data-aos-delay='400'>
           <article className="contact-option">
             <MdEmail  className='con-op-icon'/>
             <h4>Email</h4>
             
             <a href="mailto:abdallayusufahmed@gmail.com" target="blank">Send a Message</a>
           </article>

           <article className="contact-option">
             <BsMessenger  className='con-op-icon'/>
             <h4>Messenger</h4>
             <h5>Apdalla Yusuf</h5>
             <a href="https://m.me/Apdalla.Yusuf.374" target="blank">Send a Message</a>
           </article>

           <article className="contact-option">
             <RiWhatsappFill  className='con-op-icon'/>
             <h4>WhatsApp</h4>
             <h5>+252612910628</h5>
             <a href="https://api.whatsapp.com/send?phone=+252612910628" target="blank">Send a Message</a>
           </article>
         </div>
         {/** end contact option */}
         <form ref={form}  onSubmit= {sendEmail} data-aos="fade-left" data-aos-delay='700'>
           <ToastContainer />
           <input type="text" name='name' placeholder='Your Full Name' value={name}  onChange={handleInputChange}/>
           <input type="email" name='email' placeholder='Your Email' value={email} onChange={handleInputChange}/>
           <textarea name="massege"  cols="30" rows="10" placeholder='Your Massege' value={massege} onChange={handleInputChange}></textarea>
           <button type='submit' className='btn btn-primary'  onClick={handleSubmit}> Send Massege</button>
         </form>
       </div>
     </section>
  )
}

export default ContactForm
