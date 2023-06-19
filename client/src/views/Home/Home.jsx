import React from "react";
import CardContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import {filterByTemperament} from "../../redux/actions"
const Home = () => {
    const dispatch = useDispatch();
    
  //  const allDogs = useSelector((state) => state.dogs);
  //  const temperamentos = useSelector((state) => state.temperaments);
    useEffect(() => {
        console.log("ejecutando");
        dispatch(getDogs());
    }, [dispatch]);
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }
    function handleFilterByTemperament(e) {
        dispatch(filterByTemperament(e.target.value));
    }
    
    return (
        <>
        <h1>Este es el Home</h1>
        <Link to="/Form">
        <button>Crear una raza</button>
        </Link>
        <button onClick={e=>{handleClick(e)}}>refreshhh</button>
        <h1>Breeds Home </h1>
        <div>
        <select value="" name="" id="">
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        </select>
        <select
        onChange={(e) => handleFilterByTemperament(e)}
        >
        <option>Temperamentos</option>
        {/* {temperamentos.map((el) => {
            return <option>{el.name}</option>;
        })} */}
        </select>
        
        <select name="" id="">
        <option value="all">Todos</option>
        <option value="created">Creados</option>
        <option value="api">Existentes</option>
        </select>
        
        </div>
        {/* {allDogs&&allDogs.map(e=>{
            
        })} */}
        <CardContainer />
        </>
        );
    };
    export default Home;
    