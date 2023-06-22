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
        <input type="text" className={style.input} placeholder="Search by name..." onChange={(e)=>handleInputChange(e)}/>
        <button type="submit"  className={style.button} onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
        </>
        )
    }