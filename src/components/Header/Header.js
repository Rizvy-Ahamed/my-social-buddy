import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className="mein_menu">
        <ul>
            <li><a href="/home">MY HOME</a></li>
            <li><a href="/post">MY POSTS</a></li>
            <li><a href="/profile">MY PROFILE</a></li>
            <li><a href="/portfolio">MY PORTFOLIO</a></li>
            <li><a href="/contact">CONTACTS</a></li>
            
        </ul>
    </nav>
  );
};

export default Header;