import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"

import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer data-aos='fade-up' data-aos-delay='600'>
        <div className="container footer__container">
            <article>
                <Link to="/"  className= "logo">
                    <img src={Logo} alt="footer" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus 
                    molestiae unde quas, ipsam recusandae illo totam consequuntur 
                    commodi eaque accusamus.
                </p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/" target = "_blank" rel='noreferrer noopener'>  <BsInstagram/>  </a>
                    <a href="https://www.facebook.com/" arget = "_blank" rel='noreferrer noopener'>  <FaFacebookF/>   </a>
                    <a href="https://www.facebook.com/" arget = "_blank" rel='noreferrer noopener'>  <BsTwitter/>   </a>
                    <a href="https://www.facebook.com/" arget = "_blank" rel='noreferrer noopener'>  <FaLinkedinIn/>  </a>
                    
                </div>
                
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to = "/about">About</Link>
                <Link to = "/gallery">Gallery</Link>
                <Link to = "/plans">Plans</Link>
                <Link to = "/trainers">Trainers</Link>
                <Link to = "/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to = "/s">Blog</Link>
                <Link to = "/s">Case Stusies</Link>
                <Link to = "/s">Events</Link>
                <Link to = "/s">Comunicates</Link>
                <Link to = "/s">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to = "/contact">Contact</Link>
                <Link to = "/s">Supporsts</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 By ENG Fidow &copy; All Right Reservered</small>
        </div>
    </footer>
  )
}

export default Footer
