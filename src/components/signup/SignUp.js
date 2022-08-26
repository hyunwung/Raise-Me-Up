import React from 'react'
import LoginInput, { LoginBtn } from '../LoginCompo/LoginInput';
import logo from "../../image/logo2.png";
import {Link} from "react-router-dom";
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className='signup'>
      <form className='login-form'>
        <img className='logo-img' src={logo}></img>
        <LoginInput name = "ID" placeholder="아이디" ></LoginInput>
        <LoginInput name = "Password" placeholder="비밀번호"></LoginInput>
        <LoginBtn value = "로그인">로그인</LoginBtn>
        <Link to="/signup"><LoginBtn value ="회원가입"></LoginBtn></Link>
        {/* <div className='regi-label'>아이디가 기억이 안나세요?</div> */}
      </form>
    </div>
  )
}

export default SignUp