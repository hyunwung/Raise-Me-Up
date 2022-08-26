import React, { useState } from 'react';
import Header from '../Header/Header'
import "./BookShelf.scss"
import {Input,Button} from "reactstrap"
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
// import { BsSuitHeartFill } from "react-icons/bs";
import logo from "../../image/letter.png";
import axios from "axios";

const ShelfHeader = () => {
  return(
    <div className='bookshelf-head'>
      <div className='big-container'>
        <h1 className='book-title'>Raise Me Up</h1>
        <h3 className='sub-title'>보고싶은 사람의 Book을 확인하세요 !</h3>
        <Input placeholder='Book Search'></Input>
        <Button>
          <i className='fas fa-search'></i>
        </Button>
      </div>
    </div>
  )
}

const Cards = () => {
  const [counts, setCounts] = useState([
    1,
    2,
    3,
    4,
    5
])
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
const BookShelf = () => {
  return (
    <div className='bookshelf'>
      <Header></Header>
      <ShelfHeader></ShelfHeader>
      <Cards></Cards>
    </div>
  )
}

export default BookShelf