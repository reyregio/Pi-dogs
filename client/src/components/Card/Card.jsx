import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
        <p>Name:{props.name} </p>
        <p>heightMin:{props.heightMin}</p>
        <p> weightMin:{props.weightMin}</p>
        <p> lifeSpanMax:{props.life_spanMax}</p>
        <p>temperament :{props.temperament[0]}</p>
        <p>image:{props.image}</p>
        </div>
        );
    };
    
    export default Card;
    