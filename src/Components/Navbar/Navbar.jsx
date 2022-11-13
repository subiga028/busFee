import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/studentDetails">Studens List</a></li>
            <li><a href="/newStudent">New Student</a></li>
            {/* <li><a href="#">Menu</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact</a></li> */}
        </ul>
        <h2 >Bus Fee Management</h2>
    </div>
    </nav>
    </>
  )
}
