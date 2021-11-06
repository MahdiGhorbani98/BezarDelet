import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useApp} from '../ContextHook'

export default function MoreInfo(props) {
    let food = props.foodInfo;
    let dataApp = useApp();
    let cart = dataApp.cart;
    let AddToCart = dataApp.AddToCart;
    let RemoveFromCart = dataApp.RemoveFromCart;


    function ClosePage(){
        document.querySelector('.overLayMoreInfo').style.display = "none"; 
    }

    let GetCount=()=>{
        return  cart.map(i=>(i.id === food.id?i.count : "")) 
    }


    return (
        
        <div className="overLayMoreInfo">
            <div className="back" onClick={()=>ClosePage()}></div>
            <div className="pageCartMoreInfo">
                <IconButton style={{margin:'5px' , position:'absolute',color:'#979797'}} onClick={()=>ClosePage()} className="closeBtn">
                        <CloseIcon/>
                </IconButton>
                <div className="MoreInfo__Content">

                    <div className="MoreInfo__left">
                        <p  className="moreInfo__foodTitle">{food.title}</p>
                        <p  className="moreInfo__foodDes">{food.description}</p>
                        <span  className="moreInfo__foodFat"> Fat : {food.fat}</span>
                        <span  className="moreInfo__foodCalories">Calories : {food.kilo_calories}</span>
                        {/* <p  className="moreInfo__foodExercises">{food.exercises}</p> */}
                        {food.tags? food.tags.some(e=> e.name==="sport")? <p className="advice">You must do these exercises to burn extra calories:</p> : null : null}
                        {food.tags? food.tags.some(e=> e.name==="sport")? food.exercises.map((i,index)=>(<li className="exercise" key={index}>{i.name}</li>)) : null : null}

                    </div>

                    <div className="MoreInfo__right">
                        <img className="moreInfo__foodImg" src={food.image? food.image.search("http")!==-1? food.image : `http://localhost:8000${food.image}` : null} alt={food.title} />
                        {food.tags? food.tags.some(e=> e.name==="all")? <span className="forAll moreInfo__forWho allOrange">for All</span> : null  : null}
                        {food.tags? food.tags.some(e=> e.name==="diet")? <span className="forDiet moreInfo__forWho dietBlue">People on a diet</span> : null :null}
                        {food.tags? food.tags.some(e=> e.name==="sport")? <span className="forSport moreInfo__forWho sportYellow">Sportmen</span> : null : null}
                        {food.tags? food.tags.some(e=> e.name==="veg")? <span className="forveg moreInfo__forWho">for Vegetarians</span> : null  : null}
                        <p className="moreInfo__foodPrice">Price : ${food.price}</p>
                        <div className="moreInfo__countCart__addBtn">
                                <button onClick={()=>AddToCart(food)} className={`moreInfo__addBtn`}>+</button>
                                <span className="moreInfo__countCart countCart__cart">{GetCount()}</span>
                                <button onClick={()=>RemoveFromCart(food)} className="moreInfo__addBtn">-</button>
                        </div>


                    </div>
                


                    
                </div>
            </div>
        </div>


    )
}
