import React from 'react'
import chef  from '../asset/images/Chef-min.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function Footer() {
    return (
        <footer id="About">
            <img className="chef" src={chef} alt="Chef" />
            <div className="footerSection">
                <h4>About us</h4>
                <p className="linkFooter">Price</p>
                <p className="linkFooter">Menu</p>
                <p className="linkFooter">Main page</p>
            </div>

            <div className="footerSection">
                <h4>Services</h4>
                <p className="linkFooter">Delivery</p>
                <p className="linkFooter">Packaging</p>
            </div>

            <div className="footerSection">
                <h4>Schedule</h4>
                <p className="linkFooter mn">Mn - Fr:</p>
                <p className="linkFooter">9:00 am - 8:00 pm</p>
            </div>

            <div className="">
            <InstagramIcon className="socialFooter"/>
            <LinkedInIcon className="socialFooter"/>
            <FacebookIcon className="socialFooter facebook"/>
            </div>
        </footer>
    )
}
