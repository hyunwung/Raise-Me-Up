import "./Layout.scss";
import Header from "../Header/Header";
import Books from "../Books/Books";

const Layout = () =>{
    return (
        <div className="layout">
            <Header></Header>
            <Books></Books>
        </div>
    );
}

export default Layout;