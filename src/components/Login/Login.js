import React from 'react';
import "./Login.scss";


const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <form className='join-id'>
          <div>
            <label>아이디</label>
            <input></input>
          </div>
          <div>
            <label>패스워드</label>
            <input></input>
          </div>
          <div className='btns'>
            <button>회원가입</button>
            <button>로그인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;