import { AiFillCrown } from "react-icons/ai"
import Sectionead from './Sectionead'
import { programs } from "../data"
import Card from "../Ui/Card"
import { Link } from "react-router-dom"

const Programers = () => {
  return (
    <>
      <section className="programer" data-aos='fade-up' data-aos-delay='600'>
        <div className="container programer-container">
          <Sectionead icon={<AiFillCrown />} title="Programers"/>

          <div className="programer__wraper" >
            {
              programs.map(({ id, icon, title, info, path }) => {
                return (
                  <Card className="programer__programm" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{info}</small>
                    <Link to={path} className="btn sm">Learn More</Link>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Programers
