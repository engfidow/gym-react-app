import React from 'react'

import mike from "../images/avatar1.jpg";
import man from "../images/avatar2.jpg";
import lady from "../images/avatar3.jpg";
import daisy from "../images/avatar4.jpg";

import Sectionead from './Sectionead';
import { RiDoubleQuotesL } from "react-icons/ri"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testmonia = () => {


    const data = [
        {
            avarta: mike,
            name: "Mikal",
            review:
                "When he delivered my job my head spinned it was so nice ond he Implemented every functionality i requested for Thank you",
        },

        {
            avarta: man,
            name: "John Smith",
            review:
                "This guy is incredibly owesome, i hired him and when He delivered i honestly fell in love with the project. He is indeed a great guy.",
        },

        {
            avarta: lady,
            name: "Dalsy Dominic",
            review:
                "I patronized Ehizeex and when He delivered I honestly fell in love with the project He is a very honest guy and he delivers ontime.",
        },

        {
            avarta: daisy,
            name: "MARY",
            review:
                "It was nice hiring this guy for my e-commerce project He delivered even more than i can imagine.I recommend him for you",
        },


    ];



    return (
        <section id="testmonia">
            
            <div className='container'>
                <Sectionead icon={<RiDoubleQuotesL />} title="Testmonial"  className="title__icon"/>

                <Swiper className="container test-containe"
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}

                    pagination={{ clickable: true }}

                >

                    {data.map(({ avarta, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testmonial">
                                <div className="client-avart">
                                    <img src={avarta} alt="im" />
                                </div>
                                <h5 className="client-name">{name}</h5>
                                <small className="client-review">{review}</small>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testmonia
