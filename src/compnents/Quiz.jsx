import React from 'react'
import { useState,useEffect } from 'react'
import { TimelineMax } from "gsap";
import axios from 'axios'
import FormQuizComponent from './FormQuizComponent'
export const Questions = React.createContext();


export default function Quiz() {
    let [display , setDisplay] = useState(false)
    let [questions , setQuestions] = useState([]);

    const startQuiz = ()=>{
        setDisplay(!display);    

        // axios.get("http://localhost:8000/question")
        axios.get("https://api.npoint.io/fa86a9d61c987030efd0")
        .then((data) =>{
            setQuestions(data.data)
        })
    }

    useEffect(() => {
        const tl = new TimelineMax();
        TimelineMax.defaultOverwrite = false
        if(document.querySelector('.flip-card-innerRun1')){
            tl.fromTo('.formQuiz' , 
            {
                opacity:0,
                y:-20
            },
            {
                y:0,
                opacity:1,
                duration:0.5
            }
            );
        }

    } )

    return (
        <Questions.Provider value={
            {
                question :  questions,
                display : display
            }
        }>
            <div id="Quiz" className="containerQuiz">
                <div className ="startQuiz">
                    <p className="introQuiz">Click here  to see   what your belly wants</p>
                    <button onClick={()=>startQuiz()} className="startQuizBtn">{display?"Cancel" : "Start Quiz"}</button>
                    {
                        
                        questions.length>0?
                        <div style={{display:display? "block" : "none"}} className="formQuiz">
                        <FormQuizComponent/>
                        </div>
                        :null
                    }
                </div>
            </div>
        </Questions.Provider>
    )
}
