import React from 'react'
import FoodCard from './FoodCard'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useApp } from '../ContextHook'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Menu() {

    let [loadMore,setloadMore]=useState(false)
    let [displayLoadMore,setDisplayLoadMore]=useState(true)
    let [foods,setFoods]=useState([])
    let [foodsForMap,setFoodsForMap]=useState([])
    let dataApp = useApp();
    let url = dataApp.url
    let isAll=dataApp.isAll;
    let submitClick=dataApp.submitClick;

    useEffect(()=>{
        axios.get(url)
        .then(data=>setFoods(data.data))
        
    },[url])

    useEffect(()=>{
        AllFoods();
    },[isAll])

    useEffect(()=>{
        // if(submitClick){
        //     const foodsExcept3 = []
        //     for (let i = 3; i < foods.length; i++) {
        //         foodsExcept3[i] = foods[i];
        //     }
        //     setFoodsForMap(foodsExpect3)

        // }
        
            setFoodsForMap(foods)
        
    },[foods])

    let AllFoods = ()=>{
        if(foodsForMap.length < foods.length){
            setFoodsForMap(foods)
        }
        ChangeTab('all','sport','diet')
        setDisplayLoadMore(true)
        setloadMore(false)

    }

    let DietFoods = ()=>{

        setFoodsForMap(
            foods.filter((item)=>{
                if(item.tags.some(e=> e.name==="diet")) 
                {
                    return item
                }  
            })
        )
        ChangeTab('diet','all','sport')
        setDisplayLoadMore(false)
        setloadMore(true)

    }
    let SportFoods = ()=>{
        setFoodsForMap(
            foods.filter((item)=>{
                if(item.tags.some(e=> e.name==="sport")) 
                {
                    return item
                }  
            })
        )
        ChangeTab('sport','all','diet')
        setDisplayLoadMore(false)
        setloadMore(true)


    }

    function ChangeTab(select,unSelect1,unSelect2){
        document.querySelector(`.${select}`).style.color = "#000";
        document.querySelector(`.${unSelect1}`).style.color = "#a7a7a7";
        document.querySelector(`.${unSelect2}`).style.color = "#a7a7a7";        
    }

    let LoadMore=()=>{
        setloadMore(!loadMore)
    }

    function bestFoods(){
        let result =[1,2,3] ;
        for (let i = 0; i < foodsForMap.length; i++) {
            if(i===1){
                result[0]= <FoodCard cls ={"bestFood2"} key={foodsForMap[i]} data={foodsForMap[i]}/>
            }
            if(i===0){
                result[1]= <FoodCard cls ={"bestFood1"}  key={foodsForMap[i]} data={foodsForMap[i]}/>
            }
            if(i===2){
                result[2]= <FoodCard cls ={"bestFood3"}  key={foodsForMap[i]} data={foodsForMap[i]}/>
            }
            
        }
        return result;
    }

    return (
        <div id="Menu" className="containerMenu">
            <div className="containerMenu__foodCard">
                <div className="menu__filter">
                    <h2 className="menuTitle">Menu</h2>
                    <div className="filterBtns">
                        <button onClick={AllFoods} className="all diet__sport__btn">All</button>
                        <button onClick={DietFoods} className="diet diet__sport__btn">Diet</button>
                        <button onClick={SportFoods} className="sport diet__sport__btn">Sport man</button>
                    </div>
                </div>
                <div >
                    {
                    submitClick?
                    <>
                    <div className="foodCards__best">
                        {bestFoods()}
                    </div>
                    
                    <p className="youCan">you can also choose from the following foods respectively</p>

                    <div className={`foodCards ${loadMore?'foodCardsExpand':''}`}>

                    {foodsForMap.map((item,index)=>(
                        index<3 ?
                        null
                        :
                        <FoodCard key={index} data={item}/>
                    ))}
                    </div>
                    </>
                    :
                    <div className={`foodCards ${loadMore?'foodCardsExpand':''}`}>
                    {foodsForMap.map((item,index)=>(
                        <FoodCard key={index} data={item}/>
                    ))}
                    </div>
                    }
                </div>
            </div>
            
            <button onClick={LoadMore} style={{display:displayLoadMore?"block":"none"}} className="btnLoadMore"> {loadMore?"Load less":"Load more"} {loadMore?<ExpandLessIcon/>:<ExpandMoreIcon/>}</button>
                
        </div>
    )
}
