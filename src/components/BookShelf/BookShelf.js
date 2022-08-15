import React from 'react'
import Header from '../Header/Header'
import "./BookShelf.scss"
import {InputGroup,Input,InputGroupProps,Button,FormGroup,Label} from "reactstrap"

const ShelfHeader = () => {
  return(
    <div className='bookshelf'>
      <div className='big-container'>
        <h1 className='book-title'>Raise Me Up</h1>
        <h3 className='sub-title'>보고싶은 사람의 Book을 확인하세요 !</h3>
        <Input placeholder='Book Search'></Input>
        <Button>
          <i className='fas fa-search'></i>
        </Button>
      </div>
      {/* <div className='filter'>
        <div className='title-container'>
        </div>
      </div> */}
    </div>
  )
}

const BookShelf = () => {
  return (
    <>
      <Header></Header>
      <ShelfHeader></ShelfHeader>
    </>
  )
}

export default BookShelf