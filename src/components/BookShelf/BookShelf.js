import React, { useState } from 'react';
import Header from '../Header/Header'
import "./BookShelf.scss"
import {Input,Button} from "reactstrap"
// import { BsSuitHeartFill } from "react-icons/bs";
import Cards from '../cards/Cards';

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