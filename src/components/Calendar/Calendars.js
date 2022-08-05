import React, { useState } from 'react'
import "./Calendars.css"
import Calendar from 'react-calendar';
import { Link ,useNavigate } from 'react-router-dom';

const Calenders = () => {
  const navigate = useNavigate();
  const [date,setDate] = useState(new Date()); // 클릭한 날짜 보내는 곳
  const onClickDays = (value) =>{
    let clickday=value.getDate()
    // window.location.href = (`${process.env.PUBLIC_URL}/books/${clickday}`)
    navigate(`${process.env.PUBLIC_URL}/books/${clickday}`,{ replace: false})
  }
  const onChangeDate = date =>{
    setDate(date)
  }
  return (
    <div className='calendar-container'>
      <Calendar onChange={onChangeDate}
        value={date}
        showNeighboringMonth={false}
        onClickDay={onClickDays}
        locale="en-GB"
        className={["c1","c2"]}
        >
      </Calendar>
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>
        {date.toDateString()}
      </p> */}
    </div>
  )
}

export default Calenders;