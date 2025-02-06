import React from 'react'
import { NavLink,Link } from 'react-router-dom'
function Navbar() {
  return (
<div>
<div>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to ="/">Personal Blog</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <NavLink class="nav-link active" to ="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to ="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to ="/blog">Blog</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to ="/Sponsor">Sponsor</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to ="/Contact">Contact</NavLink>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</div>
  )
}

export default Navbar