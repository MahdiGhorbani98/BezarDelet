import React from 'react'
import Card from './Card'
import blueberry3 from '../asset/images/Blueberry3.png'
import orange_Slice1 from '../asset/images/Orange_Slice1.png'



export default function Delivery() {
    return (
        <div id="Delivery" className="containerDelivery">
            <div className="containerTitle__Cards">
                <p className="deliveryTitle">Delivery</p>
                <div className="containerCards">
                    <Card margin3px={3} lrgIcon="order" title3="Order">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore veritatis repellat placeat rem deleniti? Adipisci voluptates aliquid, tempora nobis a alias veritatis error itaque velit.
                    </Card>
                    <div className="dots">
                        <div className="smDot"></div>
                        <div className="lrgDot"></div>
                        <div className="smDot"></div>
                    </div>
                    <Card margin3px={3} lrgIcon="cook" title3="Cook">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore veritatis repellat placeat rem deleniti? Adipisci voluptates aliquid, tempora nobis a alias veritatis error itaque velit.
                    </Card>
                    <div className="dots">
                        <div className="smDot"></div>
                        <div className="lrgDot"></div>
                        <div className="smDot"></div>
                    </div>
                    <Card del="del" margin3px={3} lrgIcon="delivery" title3="Delivery">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore veritatis repellat placeat rem deleniti? Adipisci voluptates aliquid, tempora nobis a alias veritatis error itaque velit.
                    </Card>
                    <div className="dots">
                        <div className="smDot"></div>
                        <div className="lrgDot"></div>
                        <div className="smDot"></div>
                    </div>
                    <div className="payment">
                    <Card margin3px={3} lrgIcon="pay" title3="Payment">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore veritatis repellat placeat rem deleniti? Adipisci voluptates aliquid, tempora nobis a alias veritatis error itaque velit.
                    </Card>
                    </div>
                </div>
                <img className="blueberry3Deli" src={blueberry3} alt="blueberry3"/>
                <img className="orange_Slice1Deli" src={orange_Slice1} alt="orange_Slice1"/>

            </div>

        </div>
    )
}
