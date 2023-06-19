import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";

const CardContainer = () => {
    const dogs=useSelector(state=>state.dogs)

    return (
        <div className={style.container}>
        {dogs.map((dog) => {
            return (
                <Card
                id={dog.id}
                name={dog.name}
                weight={dog.weight}
                height={dog.height}
                life_span={dog.life_span}
                temperament={dog.temperament}
                image={dog.image}
                />
                );
            })}
            </div>
            );
        };
        
        export default CardContainer;
        