import React from 'react'
import {NavLink} from 'react-router-dom'
function nav() {

   let  navLinkStyle=({isActive}) => { 
        return {color:isActive ? 'black' : 'green'}}
    

  return (
    <div>

      <NavLink to='/about' state={navLinkStyle}>about</NavLink>
      <NavLink to='/login' state={navLinkStyle} >login</NavLink>
    </div>
  )
}

export default nav