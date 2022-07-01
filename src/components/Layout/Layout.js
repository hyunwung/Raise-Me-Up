import "./Layout.scss";
import Header from "../Header/Header";
import Book from "../Book/Book";

function Layout() {
    return (
        <div className="layout">
            <Header></Header>
            <Book></Book>
        </div>
    );
}
  
export default Layout;