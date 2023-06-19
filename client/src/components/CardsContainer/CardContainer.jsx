import React from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";

const CardContainer = ({ dogs }) => {
    return (
        <div className={style.container}>
        {dogs.map((dog) => (
            <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            weight={dog.weight}
            height={dog.height}
            life_span={dog.life_span}
            temperament={dog.temperament}
            image={dog.image}
            />
            ))}
            </div>
            );
        };
        
        export default CardContainer;
        