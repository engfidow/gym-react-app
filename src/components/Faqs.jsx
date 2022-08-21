import Sectionead from "./Sectionead"
import {FaQuestion} from "react-icons/fa"
import {faqs} from "../data"
import Faq from "./Faq"
const Faqs = () => {
  return (
    <section className="faqs" data-aos='fade-up' data-aos-delay='600'>
        <div className="container faqs__container">
            <Sectionead icon={<FaQuestion/>} title ="FAQs"/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) =>{
                        return <Faq key={id} question = {question} answer = {answer} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faqs
