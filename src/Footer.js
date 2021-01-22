import React from 'react';
import './footer.css';

const date = new Date();

const currentYear = date.getFullYear();


function Footer (){
    return (
        <div className="footerStyle">
          <ul>
           
             
            <li className="listTags_footer"><a href="/">Home</a></li>
            <li className="listTags_footer"><a href="/">Article</a></li>
            <li className="listTags_footer"><a href="/">Personal-Blog</a></li>
            <li className="listTags_footer"><a href="/">About Us</a></li>
            <li className="listTags_footer"><a href="/">Contact Us</a></li>
          </ul>


            <h3>Copyright© {currentYear}  </h3>
        </div>
    )
}

export default Footer;