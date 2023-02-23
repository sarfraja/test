import React from 'react'

export default function Header() {
  return (
    <div>
          <header className="header">
      <div className="header_logoContainer">
        <img src="./images/Logo.svg" width="150" height="75" alt="PMEntire's logo" />
      </div>
      <div className="header_navContainer">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_list__items whiteText">
              <a href="/">About Us</a>
            </li>
            <li className="nav_list__items whiteText">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}
