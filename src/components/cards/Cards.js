import React,{useState,useEffect} from 'react';
import "./Cards.scss";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import logo from "../../image/letter.png";
import {Link} from "react-router-dom";

const url = process.env.REACT_APP_BOARD

const Cards = () => {
  const [data,setData] = useState("")
  const getBoard = async () => {
    try{
      const response = await axios.get(url+"/api/v1/board",
        {
          "Content-Type":"application/json"
        })
      setData(response.data)
      console.log(response.data)
    }catch{
      console.log("error")
    }
  }
  const [counts, setCounts] = useState([
    1,
    2,
    3,
    4,
    5
  ])
  useEffect(()=>{
    getBoard()
  },[])
  return(
    <div className='cards'>
      {counts.map((count,index)=>{
        return(
          <Link to={`/books/${index+1}`} className='card-link' key={index}>
          <Card style={{ maxHeight:"500px" , maxWidth:"500px"}} className="card-container">
            <Card.Img variant="top" src={logo} className="card-img"/>
          </Card>
          </Link>                
          )
      })}
    </div>
  )
}

export default Cards