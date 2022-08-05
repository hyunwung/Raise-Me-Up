import Header from "../Header/Header";
import right from "../../image/arrowr.png";
import left from "../../image/arrowl.png";
import "./DayCards.scss"
import { useState } from "react";
import { Link } from 'react-router-dom';

function Cards(){
    const [month ,setMonth] = useState(new Date().getMonth()+1)
    const [today,setToday] =  useState(new Date().getDate())
    const [index,setIndex] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ]);
    console.log(today)

    const nextButton = () => {
        if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){//31일인 친구들
            setToday(today === 31 ? 1 : today+1)   
        }else if(month===4 || month===6 || month===9 || month===11){ // 30 일
            setToday(today === 30 ? 1 : today+1)
        }else{
            setToday(today === 28 ? 1 : today+1)
        }
    }
    const prevButton = () => {
        if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){//31일인 친구들
            setToday(today <= 1 ? 31 : today-1)
            
        }else if(month===4 || month===6 || month===9 || month===11){ // 30 일
            setToday(today <= 1 ? 30 : 1)
        }else{
            setToday(today <= 1 ? 28 : 1)
        }
    }
    
    return(
        <>
            <Header></Header>
            <div className="cards">
            <div className="arrow-left" onClick={()=>prevButton()}>
                <img src={left} alt="" className="left"></img>
            </div>
            <div className="wrapper">
                {index.map((ele,index)=>(
                        <Link to={`${process.env.PUBLIC_URL}/books/${today}`} layout="fill" className={index === today ? "img-container active" : "img-container"} key={index}>
                            <div>
                                {month}/{ele}
                            </div>
                        </Link>
                    )
                )}
            </div>
            <div className="arrow-right" onClick={()=>nextButton()}>
                <img src={right} alt="" className="right"></img>
            </div>
            </div>
        </>
    )   
}
export default Cards;