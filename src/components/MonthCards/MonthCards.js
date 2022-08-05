import React, { useState } from 'react'
import Header from '../Header/Header'
import "./MonthCards.scss";
import {Splide,SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import example from "../../image/letter.png"
import { Link } from 'react-router-dom';

const MonthCards = () => {
    const now = new Date().getMonth()+1
    const [months,setMonths] = useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]);
    console.log(months)
    return (
        <div className='monthcards'>
            <Header></Header>
            <Splide
                options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    drag:"free",
                    gap:"5rem",
                }}
            >
                {months.map((month,index)=>{
                    return(
                        <SplideSlide key={index}>
                            <div className='month-container'>
                                <Link to={`${process.env.PUBLIC_URL}/day/${index+1}`}>
                                    <img src={example} className='months'>
                                    </img>
                                </Link>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default MonthCards;