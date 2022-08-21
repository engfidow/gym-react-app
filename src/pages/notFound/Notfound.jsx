import { Link } from "react-router-dom"
import "./notfound.css"
import Sad from "../../images/sad.gif"

const Notfound = () => {
  return (
    <section data-aos='fade-up' data-aos-delay='600'>
      <div className="container notfound__container">
        <h2>Page Not Found !</h2>
        <img src={Sad} alt="sad" className="sad"/>
        <h1> 404</h1>
        <Link to="/" className= "btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default Notfound
