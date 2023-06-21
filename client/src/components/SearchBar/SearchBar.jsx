import React from "react";
import { useState } from "react";
import {  getDogsByName} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css"

export default function SearchBar(){
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getDogsByName(name))
    }
    
    return(
        <>
        <div className={style.SearchBox}>
        <input type="text" placeholder="Buscar..." onChange={(e)=>handleInputChange(e)}/>
        <button type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
        </>
        )
    }