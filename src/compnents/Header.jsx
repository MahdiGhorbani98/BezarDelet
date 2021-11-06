import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Cart from './Cart';


export default function Header() {

    return (
        <header>
            <h1>Bezar-Delet</h1>
            <div className="tabs">
            <a href="#How" className="tab">How</a>
            <a href="#Menu" className="tab">Menu</a>
            <a href="#Delivery" className="tab">Delivery</a>
            <a href="#About" className="tab about">About us</a>
            <button className="callUs">Call us</button>
            </div>
            <div className="socials">
            <InstagramIcon className="social only__social "/>
            <LinkedInIcon className="social only__social"/>
            <FacebookIcon className="social only__social"/>
            <Cart/>
            </div>

        </header>
        
    )
}
