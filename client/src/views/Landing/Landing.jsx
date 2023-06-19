import React from "react";
import { Link } from "react-router-dom";
const Landing = ()=>{
    return(
        <>
        <h1>Este es el Landing</h1>
        <Link to='/home'>
            <button>Ingresr!</button>
        </Link>
        </>
    )
}
export default Landing;