import React, { useState, useRef } from "react";
import "./login.scss";
import "../../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { login } from "../service/authService";

const Login = () => {
  const [show, setShow] = useState();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handelRegisters = async (event) => {
  event.preventDefault();
    
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
      };
      
      const data = await login(authDetail);
      data.accessToken ? navigate("/Welcome") : alert('not ok');
    }catch(error) {
      alert(error(error.message)) 
    }
  };

  return (
    <section className="login">
      <form onSubmit={handelRegisters}>
        <div className="item">
          <label htmlFor="email"></label>
          <input
            className="input"
            type="text"
            name="email"
            id="email"
            placeholder="Email or Username"
            ref={email}
            required
          />
        </div>
        <div className="item">
          <label for="password"></label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
            required
          />
        </div>

        <div class="check">
          <input type="checkbox" id="cb1" />
          <label for="cb1">Remember me</label>
        </div>

        <button className="btn">Login</button>
      </form>

      <Link onClick={() => setShow(!show)} className="forgotLink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <span className="p-[15px]">Forgot your password?</span>
      </Link>

      {/* {show && <Forgotpassword setShow={setShow} />} */}
    </section>
  );
};

export default Login;
