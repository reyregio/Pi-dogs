import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <>
        <h1>Henry Dogs</h1>
        
        <h2>Breeds</h2>
        <Link to="/home">
        <div className={styles.container}> <button className={styles.button}>Ingresar!</button></div>
        </Link>
        </>
        );
    };
    
    export default Landing;
    