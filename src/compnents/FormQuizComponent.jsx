import React from 'react'
import {useQuestion} from '../ContextHook'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useState,useEffect } from 'react'
import { useApp } from '../ContextHook'


export default function FormQuizComponent() {
    const [value1, setValue1] = useState('sea');
    const [value2, setValue2] = useState('22');
    const [value3, setValue3] = useState('fle2');
    const [value4, setValue4] = useState('fe');
    const [value5, setValue5] = useState('f2');
    let [qr , setQr] = useState([]);
    let [questionRandom , setQuestionRandom] = useState([]);

    let dataApp = useApp();
    let suggestUrl = dataApp.suggestUrl;
    let SubmitClicked = dataApp.SubmitClicked;
    let ChangeToAll = dataApp.ChangeToAll;
    
    const handleSubmit = e => {
        e.preventDefault();
        suggestUrl(`http://localhost:8000/food/suggest?tag_ids=${value1},${value2},${value3},${value4},${value5}`)
        ChangeToAll();
        SubmitClicked();
    };



    const handleChange = (numberQuestion) => (event) => {
        if(numberQuestion === 1){
            setValue1(event.target.value);
            // console.log(value1)
        }
        else if(numberQuestion=== 2){
            setValue2(event.target.value);
            // console.log(value2);
        }
        else if(numberQuestion=== 3){
            setValue3(event.target.value);
            // console.log(value3);
        }
        else if(numberQuestion=== 4){
            setValue4(event.target.value);
            // console.log(value4);
        }
        else if(numberQuestion=== 5){
            setValue5(event.target.value);
            // console.log(value5);
        }
    }
    const valueSet = (numberQuestion) => {
        if(numberQuestion === 1){
            return value1
        }
        else if(numberQuestion=== 2){
            return value2
        }
        else if(numberQuestion=== 3){
            return value3
        }
        else if(numberQuestion=== 4){
            return value4
        }
        else if(numberQuestion=== 5){
            return value5
        }
    }



    const data = useQuestion()
    const question = data.question;
    const display = data.display;

    function Random(min,max){
        return ~~(Math.random()* (max - min + 1) + min)
    }
    let filter=[
        Random(0,1),
        Random(2,3),
        Random(4,5),
        Random(6,7),
        Random(8,9)
    ]

    useEffect(() => {
        QuestionFilter(filter)
    }, [display])

    function QuestionFilter(item){
        for (let i = 0; i < item.length; i++) {
            qr[i] = question[item[i]];
        }
        setQuestionRandom(qr)

    }

    let questionR = questionRandom;




    const theme = createTheme({
        palette:{
            primary:{
                main :'#eba42c'
            }
        }
    })

    function scrollToTarget(){
        var element_to_scroll_to = document.getElementById('Menu');
        element_to_scroll_to.scrollIntoView();
    }

    return (
        <ThemeProvider theme={theme}>
        <form id="form" className="form" onSubmit={handleSubmit} >
            {
                questionR.length>0?
                questionR.map((item,indexQ)=>(
                    <div key={indexQ} className="questionBody">
                        <p className="questions">{indexQ+1}. {item.question}</p>
                        
                        <div className="flexRow__options">
                        {item.answer.map((i,index)=>(
                                <div key={index} className="answerCheck ">
                                    <p className="answer">{i.answer}</p>
                                    <RadioGroup value={valueSet(indexQ+1)} onChange={handleChange(indexQ+1)} >
                                    <FormControlLabel value={i.id+""} 
                                    control={<Radio  color="primary" />}
                                    />
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
                :null
            }

        <button onClick={()=>scrollToTarget()} className="submitBtnForm" type="submit" >
        Submit
        </button>

        </form>







        </ThemeProvider>

    )
}
