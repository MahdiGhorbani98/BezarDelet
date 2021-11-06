import React from 'react'
import {useApp} from '../ContextHook'
import Rank1 from '../asset/images/Rank/Rank1.png'
import Rank2 from '../asset/images/Rank/Rank2.png'
import Rank3 from '../asset/images/Rank/Rank3.png'
import { TimelineMax } from "gsap";

export default function FoodCard(props) {
    let food = props.data;
    let dataApp = useApp();
    let SetFoodInfo = dataApp.SetFoodInfo;
    let cart = dataApp.cart;
    let AddToCart = dataApp.AddToCart;
    let RemoveFromCart = dataApp.RemoveFromCart;

    // let [run1,setRun1] = React.useState('')

    let GetCount=()=>{
        return  cart.map(i=>(i.id === food.id?i.count : "")) 
    }

    function OpenMoreInfo(item){
        SetFoodInfo(item)
        document.querySelector('.overLayMoreInfo').style.display = "flex"; 
    }


    React.useEffect(() => {
        const tl = new TimelineMax();
        TimelineMax.defaultOverwrite = false
        if(document.querySelector('.flip-card-innerRun1')){
            tl.to('.flip-card-innerRun3', {duration:0.0,delay:1 ,rotationY: 180  },"-=0.0")
            tl.to('.flip-card-innerRun2', {duration:0.0,delay:2 ,rotationY: 180  },"-=1.0")
            tl.to('.flip-card-innerRun1', {duration:0.0,delay:3 ,rotationY: 180  },"-=2.0")
            tl.to('.foooooooooood', {duration:0.0,delay:0 ,rotationY: 180  },"-=3.0")
        }

    }, []);


    return (
        <div className={`${props.cls?"flip-card":""} flip-cardRun`}>
            <div className={`${props.cls?"flip-card-inner":""} ${props.cls==="bestFood1"?"flip-card-innerRun1" : props.cls==="bestFood2"?"flip-card-innerRun2":"flip-card-innerRun3"}` }>
                {props.cls?
                <div className={`foodCard-front ${props.cls?props.cls+'__front':'' }`}>
                    <div className="foodCard-front__border">
                        <img className="rankImg" src={props.cls==="bestFood1"?Rank1 : props.cls==="bestFood2"?Rank2:Rank3} alt="Rank" />
                        <p
                        className={props.cls==="bestFood1"?"Rank1" : props.cls==="bestFood2"?"Rank2":"Rank3"}
                        >{props.cls==="bestFood1"?"Golden Food" : props.cls==="bestFood2"?"Silver Food":"Bronze Food"}</p>
                    </div>
                </div>
                :""}
                <div className={`foodCard ${props.cls?props.cls:'' } ${props.cls? props.cls==="bestFood1"?"":props.cls==="bestFood2"?"":"":"foooooooooood" }`}>
                <img className="foodImage" src={food.image.search("http")!==-1? food.image : `http://localhost:8000${food.image}`} alt="" />
                <h5 className="foodTitle">{food.title}</h5>
                <div className="tags__btn">
                    <div className="tags">
                    {food.tags.some(e=> e.name==="all")? <span className="forAll forWho allOrange">All</span> : null}
                    {food.tags.some(e=> e.name==="diet")? <span className="forDiet forWho dietBlue">Diet</span> : null}
                    {food.tags.some(e=> e.name==="sport")? <span className="forSport forWho sportYellow">Sport</span> : null}
                    {food.tags.some(e=> e.name==="veg")? <span className="forveg forWho">Veg</span> : null}
                    </div>
                    <button onClick={()=>OpenMoreInfo(food)} className="moreBtn">More</button>
                </div>
                <div className="br"></div>
                <div className="tags__btn">
                    <h5 className="foodPrice">${food.price}</h5>
                    <div className="countCart__addBtn">
                        <button onClick={()=>AddToCart(food)} className={`addBtn`}>+</button>
                        <span className="countCart">{GetCount()}</span>
                        <button onClick={()=>RemoveFromCart(food)} className="removeBtn addBtn">-</button>
                    </div>
                </div>



            </div>
            </div>
        </div>
    )
}

