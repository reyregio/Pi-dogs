import React from "react";
import styles from "./Card.module.css";
import { Link }  from "react-router-dom"

const Card = ({ id, name, image, weight, height, temperament, life_span }) => {
    const temperamentDisplay = temperament ? temperament.join(" ") : "";
    
    return (
        <Link to={`/home/${id}`} style={{ textDecoration: "none" }}>
        <div className={styles.card}>
        
        <h3> {name}</h3>
        <h4>ID: {id}</h4>
        <p>Peso: {weight}</p>
        <p>Altura: {height}</p>
        <p>Temperamentos: {temperamentDisplay}</p>
        <p>Años de vida: {life_span}</p>
        <img src={image} alt="img not found" />
        </div>
        </Link>
        );
    };
    
    export default Card;
    