import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-wrapper">
      <img
        className="Megaphone-icon"
        alt="xd"
        src="../src/assets/megaphone.png"
      />
      <img className="popout-trig" alt="popout" src="../src/assets/arrow.png" />
      <img
        className="header__button--menu"
        alt="header"
        src="../src/assets/menu.png"
      />
    </div>
  )
}

export default Header
