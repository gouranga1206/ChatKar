import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "../../../DigiFitness-Backend/node_modules/axios/index.js";


let SignIn = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:5000/api/user/login', {
          email,password
      })
      .then(res => {
          if(res.data=== "success"){
            navigate('/');
          }
      }
      )
      .catch(err => {
          console.log(err);
      }
      )
  }

  return (
    <div className="Sign-In">
      <div className="Sign-In-Container">
        <div className="Sign-In-Header">
          <h1>
            Welcome to <span>ChatBot</span>
            <br />
            Sign In to Continue
          </h1>

          <div className="Sign-In-Form">
            <p>
              Don't have an account?{" "}
              <Link to='/signup'>
                <b>Create a account</b>
              </Link>
              <br />
              It takes less than a minute.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder="Email" name="email" onChange={e=>{setEmail(e.target.value)}}/>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="Password" name="password" onChange={e=>{setPassword(e.target.value)}}/>
              <p>Forget Password ?</p>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
