import React from 'react'
import { useEffect } from 'react';
import '../css/app.css'
import Header from './Header'
import '../css/app.css'
import Home from './Home'
import HowWork from './HowWork'
import Delivery from './Delivery'
import Quiz from './Quiz'
import Menu from './Menu'
import Footer from './Footer'
import MoreInfo from './MoreInfo';


export const Url = React.createContext();


function App() {
  let [submitClick, setSubmitClick] = React.useState(false);
  let [cart, setCart] = React.useState([]);
  let [foodInfo, setFoodInfo] = React.useState([]);
  let [url, setUrl] = React.useState('https://api.npoint.io/7798a2546db178400db5')
  // let [url, setUrl] = React.useState('http://localhost:8000/food')
  let [isAll, setIsAll] = React.useState(false)

  let SubmitClicked =()=>{
    setSubmitClick(true)
  }
  let SetFoodInfo =(food)=>{
    setFoodInfo(food)
  }
  let suggestUrl =(customUrl)=>{
    setUrl(customUrl)
  }

  let ChangeToAll=()=>{
    setIsAll(!isAll)
  }

  let AddToCart=(food)=>{
    let count = 0;
    let valid = false;
    cart.forEach((item) => {
      if(item.id === food.id){
        valid =true
        let i = {...item, ...item.count++}
        setCart(pre=> [...pre])
      }
    });

    if(!valid){
      setCart(pre=> [...pre , {...food, count : pre.count?pre.count :count+1}])
    }
  }

  let RemoveFromCart=(food)=>{
    cart.forEach((item)=>{
      if(item.id === food.id){
        let i = {...item, ...item.count--}
        setCart(pre=>[...pre])
      }
    })

    setCart(cart.filter(item=>{
      return item.count > 0
    }))
  }

//////////////////////////LocalStorage///////////////////////////////
  useEffect(() => {
    const c = JSON.parse(localStorage.getItem("carts") || [])
    setCart(c)
  }, [])

  useEffect(() => {
    localStorage.setItem('carts' , JSON.stringify(cart))
  }, [cart])


  return (
    <Url.Provider value ={{
      url : url,
      isAll :isAll,
      cart : cart,
      submitClick:submitClick,
      suggestUrl : suggestUrl,
      ChangeToAll:ChangeToAll,
      AddToCart:AddToCart,
      RemoveFromCart:RemoveFromCart,
      SetFoodInfo:SetFoodInfo,
      SubmitClicked:SubmitClicked

    }}>
      <div>
        <Header/>
        <Home/>
        <HowWork/>
        <Quiz/>
        <Menu/>
        <MoreInfo foodInfo = {foodInfo}/>
        <Delivery/>
        <Footer/>
      </div>
    </Url.Provider>
  );
}

export default App;
