import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

const items = useSelector((state)=> state.cart)


  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', backgroundColor:'#19A7CE',padding:'20px'}}>
      <span className='logo'>REDUX STORE</span>
      <div>
        <Link className='navLink'  to='/'>Home</Link>
        <Link className='navLink' to='/cart'>cart</Link>
       <span className='cartCount'>
        Cart items: {items.length}
       </span>
      </div>
    </div>
  )
}

export default Navbar
