import React from 'react'
import "bootstrap/dist/css/bootstrap.css";


const Navbar = () => { 
  return (
    <>

<nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className ="container-fluid bg-dark">
    <a className ="navbar-brand bg-dark" href="https">Navbar</a>
    <button className ="navbar-toggler" type="button" style={{borderColor:"white"}} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon bg-dark"></span>
    </button>
    <div className ="collapse navbar-collapse bg-dark" id="navbarNavDropdown">
      <ul className ="navbar-nav bg-dark">
        <li className ="nav-item ">
          <a className ="nav-link active bg-dark" aria-current="page" href="https">Home</a>
        </li>
        <li className ="nav-item">
          <a
           className ="nav-link bg-dark" 
           href="/">
           Rent</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link bg-dark" href="/">Buy</a>
        </li>
        <li className ="nav-item dropdown">
          <a className ="nav-link dropdown-toggle bg-dark" href="https" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Property
          </a>
          <ul className ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li style={{cursor:"pointer"}}>Action</li>
            <li style={{cursor:"pointer"}}>Contact Seller</li>
            <li  style={{cursor:"pointer"}}>Contact Broker</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar