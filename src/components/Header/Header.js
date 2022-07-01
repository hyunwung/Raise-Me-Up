import "./Header.scss";
import logo from "../../image/logo.png";
import {Link} from "react-router-dom"

function Header() {
    return (
      <div className="header">
        <div className="header-right">
          <img src={logo} className='logo'>
          
          </img>
        </div>
        <div className="header-left">
          LogOut
        </div>
      </div>
    );
  }
  
  export default Header;
  