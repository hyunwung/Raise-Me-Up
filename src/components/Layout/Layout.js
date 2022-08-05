import "./Layout.scss";
import Header from "../Header/Header";
import Books from "../Books/Books";

const Layout = () =>{
    return (
        <div className="layout">
            <Header></Header>
            <Books></Books>
            {/* <MoveBtn></MoveBtn> */}
        </div>
    );
}
// const MoveBtn = () =>{
//     return(
//         <div>
            
//         </div>
//     )
// }

export default Layout;