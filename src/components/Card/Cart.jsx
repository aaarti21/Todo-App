import React from 'react'
import './Cart.css'
import { IoMdCheckmark } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Cart({inputtext,deleteHandler,editHandler,id}) {
  const nav=useNavigate(); 
  const detailshandler=(id)=>{nav(`/details/${id}`)}
  return (
    
      <div className="shopping-cart">
        <div ><h3>{inputtext}</h3></div>
        <div className='cart-text'>
          <div><IoMdCheckmark className='icon-check'/></div>
          <div><PiNotePencilBold className='note-iocn' onClick={editHandler}/></div>
          <div><MdDelete onClick={deleteHandler} className='delete-icon' /></div>
          <div><FaArrowRight  onClick={()=>{detailshandler(id)}}  className="right-arrow"/></div>
        </div>
    </div>
  )
}

export default Cart
