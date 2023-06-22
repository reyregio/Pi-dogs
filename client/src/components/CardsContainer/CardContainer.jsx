import React from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";

const CardContainer = ({ dogs }) => {
    return (
        <div className={style.container}>
        {dogs.map((dog) => {
            if (
                dog.hasOwnProperty("weightMin") &&
                dog.hasOwnProperty("weightMax") &&
                dog.hasOwnProperty("heightMin") &&
                dog.hasOwnProperty("heightMax") &&
                dog.hasOwnProperty("life_spanMin") &&
                dog.hasOwnProperty("life_spanMax")
                ) {
                    return (
                        <Card
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        weight={`${dog.weightMin}-${dog.weightMax}`}
                        height={`${dog.heightMin}-${dog.heightMax}`}
                        life_span={`${dog.life_spanMin}-${dog.life_spanMax}`}
                        temperament={dog.temperaments}
                        image={dog.image}
                        />
                        );
                    } else {
                        return (
                            <Card
                            key={dog.id}
                            id={dog.id}
                            name={dog.name}
                            weight={dog.weight}
                            height={dog.height}
                            life_span={dog.life_span}
                            temperament={dog.temperaments}
                            image={dog.image}
                            />
                            );
                        }
                    })}
                    </div>
                    );
                };
                
                export default CardContainer;
                
                