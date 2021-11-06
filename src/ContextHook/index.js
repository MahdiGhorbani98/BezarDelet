import React from "react"
import {Questions} from '../compnents/Quiz'
import {Url} from '../compnents/App'

export function useQuestion(){
    return React.useContext(Questions)
}

export function useApp(){
    return React.useContext(Url)
}