import ToDoList from "../ToDo/ToDoList/ToDoList";
import "./Books.css";
import React, { useState } from "react";
import Calendars from "../Calendar/Calendars";
import Login from "../Login/Login";

const Books = ()=>{

  const [loginCheck , setLoingCheck] = useState(true)
  // console.log(todos.find(el=>el.id ===55).content)
  let currentLocation = 1;
  let numOfPapers = 3;
  let maxLocation = numOfPapers + 1;

  const openBook = () =>{
    document.querySelector("#book").style.transform = "translateX(50%)";
    document.querySelector("#prev-btn").style.transform = "translateX(-180px)";
    document.querySelector("#next-btn").style.transform = "translateX(180px)";
  }
  const closeBook = (beginning) =>{
    if (beginning){
      document.querySelector("#book").style.transform = "translateX(0%)";
    }else{
      document.querySelector("#book").style.transform = "translateX(100%)";
    }
    document.querySelector("#prev-btn").style.transform = "translateX(0px)";
    document.querySelector("#next-btn").style.transform = "translateX(0px)";
    
  }
  const goPrevPage = () =>{
    if(currentLocation > 1) {
      switch(currentLocation) {
          case 2:
              closeBook(true);
              document.querySelector("#p1").classList.remove("flipped");
              document.querySelector("#p1").style.zIndex = 3;
              break;
          case 3:
              document.querySelector("#p2").classList.remove("flipped");
              // document.querySelector("#p2").style.zIndex = 2;
              break;
          case 4:
              openBook();
              document.querySelector("#p3").classList.remove("flipped");
              document.querySelector("#p3").style.zIndex = 1;
              break;
          default:
              throw new Error("unkown state");
      }
      currentLocation--;
    }
  }
  const goNextPage = () =>{
    if(currentLocation < maxLocation){
      switch (currentLocation){
        case 1:
          openBook();
          document.querySelector("#p1").classList.add("flipped");
          document.querySelector("#p1").style.zIndex = 1;
          break;
        case 2: 
          document.querySelector("#p2").classList.add("flipped");
          // document.querySelector("#p2").style.zIndex = 2;
          break;
        case 3:
          document.querySelector("#p3").classList.add("flipped");
          document.querySelector("#p3").style.zIndex = 3;
          closeBook(false);
          break;
        default:
          throw new Error("unknown state");
      }
      currentLocation++;
    }
  }
  return (
    <>
      <div className="book-body">
      
      <button id="prev-btn" onClick={goPrevPage}>
        <i className="fas fa-arrow-circle-left"></i>
      </button>
      <div id="book" className="book">
        <div id="p1" className="paper">
            <div className="front">
                <div id="f1" className="front-content">
                    {loginCheck ? <Login></Login> : <div>ff</div>}
                </div>
            </div>
            <div className="back">
                <div id="b1" className="back-content">
                    <Calendars></Calendars>
                    <div>로그인 이후 이용해주세요~!</div>
                </div>
            </div>
        </div>
        <div id="p2" className="paper">
            {/* <div className="front">
                <div id="f2" className="front-content">
                  <h1>Back 2</h1>
                </div>
            </div>
            <div className="back">
                <div id="b2" className="back-content">
                    <h1>Back 3</h1>
                </div>
            </div> */}
        </div>
        <div id="p3" className="paper">
            <div className="front">
                <div id="f3" className="front-content">
                    <ToDoList></ToDoList>
                </div>
            </div>
            <div className="back">
                <div id="b3" className="back-content">
                    <h1>Back</h1>
                </div>
            </div>
        </div>
      </div>
      <button id="next-btn" onClick={goNextPage}>
        <i className="fas fa-arrow-circle-right"></i>
      </button>
    </div>  
    </>
    
  );
}
  
export default Books;