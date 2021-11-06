import React from 'react'
import {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {useApp} from '../ContextHook'
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'


export default function Cart() {
    const {register ,handleSubmit} = useForm();

    let [cardNumber,setCardNumber] = useState('****    ****    ****    ****')
    let [yourName,setYourName] = useState('Your name')
    let [mm,setMm] = useState("00")
    let [yy,setYy] = useState("00")



    let handleSubmitFunction =(e)=>{
        alert('Your name: '+yourName + '\nCard number: '+ cardNumber + 
        '\nmm: '+mm +'\nyy: '+yy + '\nSubtotal: '+GetTotal() )
    }
    let handleChangeName =(e)=>{
        setYourName(e.target.value)
    }
    let handleChangeNumber =(e)=>{
        setCardNumber(fourDigit(e.target.value))
    }
    let handleChangeMm =(e)=>{
        setMm(e.target.value)
    }
    let handleChangeYy =(e)=>{
        setYy(e.target.value)
    }

    const darkTheme = createTheme({
        
        palette: {
          type: "dark",
          primary: {
            main: "#b8bdc2"
          },
          secondary: {
            main: "#b8bdc2"
          }
        }
      })

    let dataApp = useApp();
    let cart = dataApp.cart;
    let AddToCart = dataApp.AddToCart;
    let RemoveFromCart = dataApp.RemoveFromCart;

    let GetTotal=()=>{
        return cart.reduce((a,cartItem)=> a+ cartItem.count * cartItem.price,0).toFixed(2)
        
    }
    function RoundPrice(price){
        return price.toFixed(2)
    }

    function CloseCart(){
        document.querySelector('.containerCart__Bg').style.display = "none";

    }
    function OpenCart(){
        document.querySelector('.containerCart__Bg').style.display = "flex";
    }

    function fourDigit(num){
        return num.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    }


    return (
    <ThemeProvider theme={darkTheme}>

        <div className="containerCart">
            <IconButton onClick={()=>OpenCart()} style={{ color:'#a7a7a7' }}>
            <ShoppingBasketOutlinedIcon className="social cart"/>
            <div className={`alarmCart ${cart.length>0?"alarmCart__toggle":""}`}></div>
            </IconButton>

        <div className="containerCart__Bg">
            <div className="back" onClick={()=>CloseCart()}></div>
            <div className="pageCart">
                <IconButton style={{margin:'5px' , position:'absolute',color:'#979797'}} onClick={()=>CloseCart()} className="closeBtn">
                    <CloseIcon/>
                </IconButton>
                <div className="flexCart">
                    <div className="datailOrder">
                    <h1>Shopping Cart</h1>
                    <div className={`container__itemCart ${cart.length=== 0? "container__itemCart__overflow":""}`}>
                    {cart.map((item,index)=>(
                        <div className="itemCart" key={index}>
                            <img className="itemCart__foodImg" src={item.image.search("http")!==-1? item.image : `http://localhost:8000${item.image}`} alt={item.title} />
                            <div className="actionsCart">
                                <p  className="itemCart__foodTitle">{item.title}</p>

                                <div className="countCart__addBtn">
                                    <button onClick={()=>AddToCart(item)} className={`addBtn`}>+</button>
                                    <span className="countCart countCart__cart">{item.count}</span>
                                    <button onClick={()=>RemoveFromCart(item)} className="removeBtn addBtn">-</button>
                                </div>
                                <p className="itemCart__foodPrice">${RoundPrice(item.count * item.price)}</p>
                            </div>
                        </div>
                    ))
                    }
                    {cart.length ===0 ? <p className="cartBlank">Your cart is empty</p> : ""}
                    </div>
                        <div className="subtotalContainer">
                        <p className="subtotal">Subtotal:</p>
                        <p className="subtotal__num">${GetTotal()}</p>
                        </div>
                    </div>

                    <div className="checkoutPage">
                        <h3 className="cardDetails">Card Details</h3>
                        <p className="cartType">Cart type</p>

                        <div className="bankCard__Container">

                            <div className="bankCard">
                                
                                <h3 className="visa">VISA</h3>
                                <pre className="numberStar">{cardNumber.length===0? '****    ****    ****    ****' : cardNumber}</pre>
                                <div className="name__date">
                                    <p>{yourName.length===0?'Your name':yourName}</p>
                                    <p>{mm.length===0?'00':mm}/{yy.length===0?'00':yy}</p>
                                </div>
                            </div>

                            <div className="twoCircle__master">
                                <div className="twoCircle">
                                    <div className="circle redCircle"></div>
                                    <div className="circle yellowCircle"></div>
                                </div>
                                <p className="master">MasterCard</p>
                            </div>

                        </div>

                        <form className="formCheckout" onSubmit={handleSubmit(handleSubmitFunction)}>
                            <TextField 
                            {...register ("Name" ,{ pattern:/^[A-Za-z]+$/i })}                            
                            required onChange={handleChangeName} style={{width:'80%', marginTop:'15px'}} InputLabelProps={{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}} label="Name on Card" />
                            <TextField
                            {...register ("cardNumber" ,{maxLength:16,minLength:16 , pattern:/\d{16}$/ })}                            
                            required onChange={handleChangeNumber} style={{width:'80%', marginTop:'10px'}} InputLabelProps={{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}  label="Card Number" />
                            <div className="date__cvv">
                            
                            <TextField
                            {...register ("mm" ,{maxLength:2,minLength:2,pattern:/\d{2}$/ })}
                            required onChange={handleChangeMm} style={{width:'20%',margin:'10px 20px 0 20px'}}InputLabelProps={{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}label="MM" />
                            
                            <TextField
                            {...register ("yy" ,{maxLength:2,minLength:2,pattern:/\d{2}$/ })}
                            required onChange={handleChangeYy} style={{width:'20%', margin:'10px 20px 0 20px'}}InputLabelProps={{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}label="YY" />

                            <TextField required 
                            {...register ("cvv" ,{maxLength:3,minLength:3,pattern:/\d{3}$/ })}
                            style={{width:'20%', margin:'10px 20px 0 20px'}}InputLabelProps={{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}label="CVV" />
                            </div>


                            <div className="checkoutBtn__Container">
                            <button className="checkoutBtn" type="submit">Check Out</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </ThemeProvider>
    )
}
