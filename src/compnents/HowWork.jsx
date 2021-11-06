import React , {useEffect ,useState}from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import blueberry2 from '../asset/images/Blueberry2.png'
import blueberryBowl from '../asset/images/BlueberryBowl.png'
import offer from '../asset/images/offer.png'
import { TimelineMax } from "gsap";
import { gsap } from 'gsap';

import * as ScrollMagic from "scrollmagic"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


export default function HowWork() {
    let checked1 = "Fast food"
    let checked2 = "At the jungle"
    let checked3 = "Spicy"
    const[ checked_bool1,setChecked_bool1 ] = useState(false)
    const[ checked_bool2,setChecked_bool2 ] = useState(false)
    const[ checked_bool3,setChecked_bool3 ] = useState(false)


    const theme = createTheme({
        palette:{
            primary:{
                main :'#eba42c'
            }
        }
    })

    useEffect(() => {
        ScrollMagicPluginGsap(ScrollMagic, gsap);

        const tl = new TimelineMax();
        TimelineMax.defaultOverwrite = false
        var controller = new ScrollMagic.Controller();
        tl.from('.howIt' , 
                    {
                        opacity:0,
                        duration:0.5
                    }
                    );
        tl.fromTo('.question1' ,
                    {
                        display:"none",
                        x:650
                    },
                    {
                        display:"flex",
                        x:0,
                        duration:0.5
                    },"+=0.3")
        // tl.fromTo('.Fast-food',{ opacity:0} ,{duration:0.5,opacity:1})
        tl.add(function(){setChecked_bool1(true)},"+=0.3")
        tl.fromTo('.question2' ,
                    {
                        display:"none",
                        x:650
                    },
                    {
                        display:"flex",
                        x:0,
                        duration:0.5
                    })
        tl.add(function(){setChecked_bool2(true)},"+=0.3")
        tl.fromTo('.question3' ,
                    {
                        display:"none",
                        x:650
                    },
                    {
                        display:"flex",
                        x:0,
                        duration:0.5
                    })
        tl.add(function(){setChecked_bool3(true)},"+=0.3")
        tl.fromTo('.submitTutorial',{display:"none"},{display:"block",duration:0.3},"-=0.2")
        tl.to('.submitTutorial', {duration:0.4,background: '#000' },"+=0.3")
        tl.to('.submitTutorial', {duration:0.5, color: '#fff'},"-=0.5")
        tl.fromTo('.especially',{opacity:0,y:-200},{y:0,opacity:1,duration:0.5})
        tl.from('.offer' ,
        {
            duration:0.5,
            opacity:0,
            rotation: 30
        })

        const scene = new ScrollMagic.Scene({
            triggerElement: ".containerHow",
            triggerHook: "onLeave",
            duration: "100%"
        })
        .setPin(".containerHow")
        .setTween(tl)
        .addTo(controller)
        .reverse(true)
    },[])
    const q = (qText , opt)=> (
        <div className={`question question${qText.charAt(0)}`}>
            <div className="ques">{qText}</div>
            <div className="options">
                {
                    opt.map((i,index)=>(                        
                        <div key={index} className="option">
                            <Checkbox checked={i === checked1? checked_bool1 : i=== checked2? checked_bool2 : i=== checked3? checked_bool3 : false} color="primary" className={`checkbox ${i}`}/>
                            {i} 
                        </div>
                    ))
                }
            </div>
        </div>
    )
    return (
        <ThemeProvider theme={theme}>
            
        <div id="How" className="containerHow">
            <div className="how">
                <div className="flexOffer">
                    <p className="especially">Especially picked for you</p>
                    <img className="offer" src={offer} alt="offer"/>
                </div>
                <section className="formTutorial">
                    <div className="howIt">
                    <p>First you should answer some question</p>
                    <h2>How it works?</h2>
                    </div>
                    <div className="flexQuestion">
                    {q("1.what type of food do you like?" , ["Fast food","Homemade    ","Chefmade"] )}
                    {q("2.Where do you like to eat your meal?" , ["By the sea","On the desert","At the jungle"] )}
                    {q("3.How do you like it taste?" , ["Sour","Spicy","Sweet","Surprise me"] )}
                    </div>
                    <button className="submitTutorial">Submit</button>
                    <img className="blueberryBowH" src={blueberryBowl} alt="blueberryBowl"/>
                    <img className="blueberryH" src={blueberry2} alt="blueberry2"/>

                </section>
            </div>


            <div className="custom-shape-divider-bottom-1629204610">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-top-1629204480">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>


        </div>
        </ThemeProvider>
    )
}
