import React from 'react'

export default function Navbar() {
  return (
    <nav style={{backgroundColor:"white" ,height:"60px",marginTop:"-17px"}}>
      <ul style={{color:"black", display:"flex" ,listStyle:"none",marginLeft:"20px"}}>
        <li style={{color:"purple",marginLeft:"15px" ,font:"50px" }}>  <h3 > Decentralised Storage</h3></li>
        <li style={{marginLeft:"45px" }}><h3>Home</h3></li>
        <li style={{marginLeft:"45px"}}><h3>About</h3></li>
        <li style={{marginLeft:"45px"}}><h3>ShareYourFiles</h3></li>
        {/* <li><a href="">About</a></li>
        <li><a href="">Share</a></li> */}
      </ul>
    </nav>
  )
}

