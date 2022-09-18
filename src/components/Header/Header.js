import "./Header.scss";
import logo from "../../image/logo.png";
import {Link} from "react-router-dom";
import { useState } from "react";

const NavBar = () =>{
  const [menuBar,setMenuBar] = useState(false);
  const onClickEvent=()=>{
    setMenuBar(!menuBar);
  }
  return(
    <div className={"header-right"+ (menuBar ? " active" : "")}>
      <div className={"header-menu"+ (menuBar ? " menu-act" : " none-act")}>
        <ul>
          <li onClick={onClickEvent}>
            <Link to={`${process.env.PUBLIC_URL}/books/${1}`}>My Book</Link>
          </li>
          <li onClick={onClickEvent}>
            <Link to={`${process.env.PUBLIC_URL}/bookshelf`}>BookShelf</Link>
          </li>
          <li onClick={onClickEvent}>
            <Link to={`${process.env.PUBLIC_URL}/mypage`}>My Page</Link>
          </li>
          <li onClick={onClickEvent}>
            <Link to={`${process.env.PUBLIC_URL}/login`} className="logout">LogOut</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={onClickEvent}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>  
      </div>
    </div>
  )
}

const Header = () =>{
    return (
      <div className="header">
        <div className="header-left">
          <Link to={`${process.env.PUBLIC_URL}/bookshelf`}><img src={logo} className='logo'></img></Link>
        </div>
        <NavBar></NavBar>
      </div>
  );
}
  
export default Header;