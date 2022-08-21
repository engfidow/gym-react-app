import Image from "../images/values.jpg"
import { GiCutDiamond } from "react-icons/gi"
import Sectionead from "./Sectionead"
import { values } from "../data"
import Card from "../Ui/Card"
const Values = () => {
  return (
   <section className="values" data-aos='fade-up' data-aos-delay='700'>
    <div className="container values__container">
        <div className="values__left">
            <div className="value__image">
                <img src={Image} alt="values" />
            </div>
        </div>
        <div className="values__right">
            <Sectionead icon={<GiCutDiamond/>} title="Values"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum 
                vero atque modi earum nihil quae alias nobis.
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc}) =>{
                        return  <Card key={id} className="values__value">
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                    </Card>
                       
                    })
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values
