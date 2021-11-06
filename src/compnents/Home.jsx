import React from 'react'
import { useEffect } from 'react'
import { gsap } from "gsap";
import blueberryBowl from '../asset/images/BlueberryBowl.png'
import pancake from '../asset/images/Pancake.png'
import blueberry1 from '../asset/images/Blueberry1.png'
import blueberry2 from '../asset/images/Blueberry2.png'
import blueberry3 from '../asset/images/Blueberry3.png'
import tableCloth from '../asset/images/TableCloth.png'
import orange_Slice1 from '../asset/images/Orange_Slice1.png'
import orange_Slice3 from '../asset/images/Orange_Slice3.png'
import Card from './Card'
export default function Home() {

    useEffect(() => {
        gsap.fromTo('.blueberryBowl' ,{display:"none",y:-300}, {display:"block", y:0, duration: 0.4})
        gsap.from('.pancake' , { y:-400,rotation:180  , duration: 0.7})
        gsap.from('.pancake' , { rotation:360  , duration: 200 , yoyo:true ,ease : "none", repeat:-1 , delay : 0.7})
        gsap.from('.blueberry1' , { y:-100 , duration: 0.5})
        gsap.from('.blueberry2' , { scale:2, opacity:0.5, duration: 0.6})
        gsap.from('.tableCloth' , { x:-400, duration: 0.7})
        return () => {
        
        }
    }, [])

    return (
        <div className= "container">
            <div className="containerBG">
                <img className="blueberryBowl" src={blueberryBowl} alt="blueberryBowl"/>
                <img className="pancake" src={pancake} alt="pancake"/>
                <img className="blueberry1" src={blueberry1} alt="blueberry1"/>
                <img className="orange_Slice1" src={orange_Slice1} alt="orange_Slice1"/>
                <img className="blueberry2" src={blueberry2} alt="blueberry2"/>
                <img className="tableCloth" src={tableCloth} alt="tableCloth"/>
                <img className="blueberry3" src={blueberry3} alt="blueberry3"/>
                <img className="orange_Slice3" src={orange_Slice3} alt="orange_Slice3"/>
            </div>
            <div className="introText">
                <h2>Mood base</h2>
                <h1>Let your stomach choose!</h1>
                <p>let's have a short interview with your stomach,<br /> we offer you best meal for <br /> your current mood.</p>
                <a className="goto" href="#Quiz">Let's go</a>
            </div>
            <section className="threeCard" >
                <Card card3="card__width3" smIcon="time"  title="Mn-Fr 9:00 am - 8:00 pm" >Working hours</Card>
                <Card card3="card__width3" smIcon="loc"  title="Isfahan_Kaveh str.27" >Our location</Card>
                <Card card3="card__width3" smIcon="phone"  title="+98-991-471-5501" >Call online</Card>
            </section>
            <div className="custom-shape-divider-top-1628967122">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
    
}
