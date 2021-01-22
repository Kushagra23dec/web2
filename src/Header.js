import React from 'react';
import './header.css';

 

function Header(){
    return (
        <div className="header"  >
            <h1 className="title">Header</h1>
            <ul className="listStyle">
            <li className="listTags"><a href="/">Home</a></li>
            <li className="listTags"><a href="/">Article</a></li>
            <li className="listTags"><a href="/">Personal-Blog</a></li>
            <li className="listTags"><a href="/">About Us</a></li>
            <li className="listTags"><a href="/">Contact Us</a></li>
            </ul>        
        </div>
    );
}


export default Header;