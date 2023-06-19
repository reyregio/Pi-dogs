import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, image, weight, height, temperament, life_span }) => {
    const temperamentDisplay = temperament ? temperament.join(" ") : "";
    
    return (
        <div className={styles.card}>
        
        <h3> {name}</h3>
        <h4>ID: {id}</h4>
        <p>Peso: {weight}</p>
        <p>Altura: {height}</p>
        <p>Temperamentos: {temperamentDisplay}</p>
        <img src={image} alt="img not found" />
        <p>Años de vida: {life_span}</p>
        </div>
        );
    };
    
    export default Card;
    