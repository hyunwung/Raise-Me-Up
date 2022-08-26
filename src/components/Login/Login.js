import React, { useState } from 'react';
import LoginInput, { LoginBtn } from '../LoginCompo/LoginInput';
import "./Login.scss";
import logo from "../../image/logo2.png";
import {Link} from "react-router-dom";

const Login = () => {
  const [userData,setUserData] = useState({
    id:"",
    password:"",
  })
  const loginHandle = () =>{

  }
  const onChange = (e) =>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <img className='logo-img' src={logo}></img>
        <LoginInput name = "ID" placeholder="아이디" onChange={onChange}></LoginInput>
        <LoginInput name = "Password" placeholder="비밀번호" onChange={onChange}></LoginInput>
        <LoginBtn value = "로그인">로그인</LoginBtn>
        <Link to="/signup"><LoginBtn value ="회원가입"></LoginBtn></Link>
        <div className='regi-label'>H&H</div>
      </form>
    </div>
  )
}

export default Login;