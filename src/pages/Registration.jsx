import React from 'react'
import './signup.scss'
import { useNavigate } from 'react-router-dom';
import { register } from '../service/authService';

const Signup = () => {
  const navigate = useNavigate()


  const handelRegisters = async (event) =>{
    event.preventDefault();

    try{
      const authDetail = {
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value
      }
      const data = await register(authDetail)
      data.accessToken? navigate("/") : toast.error(data);

    }catch(error){
      toast.error(error.message)

    }
  }


  return (
    <section className="login">
      <form onSubmit={handelRegisters}>
        <div className="item">
          <label for="email"></label>
          <input className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="item">
          <label for="username"></label>
          <input className="input"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>

        <div className="item">
          <label for="password"></label>
          <input className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <button className="btn">Sign Up</button>
      </form>
      
    </section>
  )
}

export default Signup