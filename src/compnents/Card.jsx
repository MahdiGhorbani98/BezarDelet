import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';

import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import OutdoorGrillOutlinedIcon from '@material-ui/icons/OutdoorGrillOutlined';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
export default function Card(props) {
    const smIcon = <div className="smIcon">{
        props.smIcon === "loc" ? <RoomIcon/> :
        props.smIcon === "time" ? <ScheduleIcon/> :
        <PhoneIcon/>
    }</div> 
    const lrgIcon = <div className="lrgIcon">{
        props.lrgIcon === "order" ? <BeenhereOutlinedIcon/> :
        props.lrgIcon === "cook" ? <OutdoorGrillOutlinedIcon/> :
        props.lrgIcon === "pay" ? <PaymentIcon/> :
        <LocalShippingOutlinedIcon/>
    }</div> 

    return (
        <div className={`card  ${props.card3? "card__width280":""} ${props.margin3px? "margin3px" : ""} ${props.del? "delivery" : ""} `}>
            {props.smIcon? smIcon  : "" }
            {props.lrgIcon? lrgIcon  : "" }
            <h2 className="card__title">{props.title}</h2>
            <div>
            <h3 className="card__title3">{props.title3}</h3>
            <p className="card__text">{props.children}</p>
            </div>
        </div>
    )
}
