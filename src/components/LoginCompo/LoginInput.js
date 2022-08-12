import React, { useRef } from 'react';
import "./LoginInput.scss";

const LoginInput = (props) => {
    const {name,onChange,placeholder} = props;
  return (
    <div className='loginInput'>
        <label>{name}</label>
        <input name={name}
            placeholder={placeholder} onChange={onChange}></input>
    </div>
  )
}
const LoginBtn = (props) =>{
  return(
    <button className='LoginBtn'>{props.value}
    </button>
  )
}

export default LoginInput;
export {LoginBtn};