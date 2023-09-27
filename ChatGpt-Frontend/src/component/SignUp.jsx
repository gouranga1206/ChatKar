import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "../../../DigiFitness-Backend/node_modules/axios/index.js";

let SignUp = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/user/register', {
            username,email,password,confirmPassword
        })
        .then(res => {
            navigate('/signin');
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }
    return (
        <div className="Sign-UP">
        <div className="Sign-Up-Container">
            <div className="Sign-Up-Header">
                <div className="signlogo"></div>
                <h2>Create an account</h2>
                <p>Let's begin the journey.</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="Name" id="Name" placeholder="Name" onChange={e =>{setUsername(e.target.value)}} />
                    <input type="email" name="email" id="email" placeholder="Email" onChange={e =>{setEmail(e.target.value)}} />
                    <input type="password" name="password" id="password" placeholder="Password" onChange={e =>{setPassword(e.target.value)}}/>
                    <input type="password" name="password" id="password" placeholder="Confirm Password" onChange={e =>{setConfirmPassword(e.target.value)}} />

                    <button type="submit">Create account</button>
                </form>
                <p className="account-exist">Already have an account? <Link to='/signin'><b>Sign in</b></Link></p>

            </div>
         
        </div>
      </div>
    )
}

export default SignUp;