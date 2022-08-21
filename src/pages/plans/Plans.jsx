import React from 'react'
import Header from '../../components/Header'
import Headerimage from "../../images/header_bg_3.jpg"
import Card from "../../Ui/Card"
import {plans} from "../../data"
import "./plans.css"

const Plans = () => {
  return (
    <>
      <Header title= "Plans" image= {Headerimage} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Perferendis reprehenderit vel dignissimos modi dolorem esse 
      </Header>
      <section className="plans" data-aos='fade-up' data-aos-delay='600'>
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) =>{
              return <Card key={id} className = "plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) =>{
                    return <p key={index} className = {!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans