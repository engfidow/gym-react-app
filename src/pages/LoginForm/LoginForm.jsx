
import './LoginUi.css';
import profile from "../../images/a.png";
import { useState } from 'react';
let error = "pleace enter more than 3 characters"
const LoginForm = ({setUser}) => {
  const [UseName, setUseName] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    if(UseName.length < 3) return document.getElementById("error").innerHTML = error;
    setUser(UseName);
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />

            </div>


          </div>
          <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className= "form-login">
                <input type="text" placeholder="user name" className="name"  onChange={(even) => setUseName(even.target.value)}/>
                <small id='error'></small>
                <input type="password" placeholder="user password" className="name"  />
            
              <div className="login-button">
                <button>Login</button>
              </div>
            </form>



          </div>
        </div>


      </div>
    </div>
  )
}

export default LoginForm
