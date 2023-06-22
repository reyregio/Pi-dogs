import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <><div className={styles.cons}>
        <h1 className={styles.title}>Henry Dogs</h1>
        <p className={styles.para}>by Regi Fenoglio</p>
        </div>
        <Link to="/home" className={styles.Link}>
        <div className={styles.container}> <button className={styles.button}>Ingresar!</button></div>
        </Link>
        </>
        );
    };
    
    export default Landing;
    