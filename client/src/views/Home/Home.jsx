import React, { useState, useEffect } from "react";
import CardContainer from "../../components/CardsContainer/CardContainer";
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch, useSelector } from "react-redux";
import {
    getDogs,
    getAllTemperament,
    filterTemperament,
} from "../../redux/actions.js";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    let { temperaments, dogsFilter } = useSelector((state) => state);
    
    const [charge, setCharge] = useState(false);
    
    useEffect(() => {
        setCharge(true);
        setTimeout(() => {
            setCharge(false);
        }, 3000);
        dispatch(getDogs());
        dispatch(getAllTemperament());
    }, [dispatch]);
    
    const [order, setOrder] = useState("");
    
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const allDogs = useSelector((state) => state.dogs);
    const currentDogs = dogsFilter.slice(indexOfFirstDog, indexOfLastDog);
    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    useEffect(() => {
        console.log("ejecutando");
        dispatch(getDogs());
    }, [dispatch]);
    
    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs());
    }
    function handleFilterByTemperament(e) {
        e.preventDefault(e);
        dispatch(filterTemperament(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }
    
    return (
        <>
        <h1>Este es el Home</h1>
        <Link to="/create">
        <button>Crear una raza</button>
        </Link>
        <button onClick={(e) => handleClick(e)}>refreshhh</button>
        <h1>Breeds Home</h1>
        <div>
        <select value="" name="" id="">
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        </select>
        <select
        defaultValue="TEMP"
        className={style.select}
        onChange={(e) => handleFilterByTemperament(e)}
        >
        <option value="TEMP" disabled defaultValue>
        Filter by temperament
        </option>
        <option value="all">All</option>
        {temperaments &&
            temperaments.map((temp) => (
                <option key={temp.id} value={temp.name}>
                {temp.name}
                </option>
                ))}
                </select>
                <select name="" id="">
                <option value="all">Todos</option>
                <option value="created">Creados</option>
                <option value="api">Existentes</option>
                </select>
                </div>
                <Paginado
                dogsPerPage={dogsPerPage}
                allDogs={dogsFilter.length}
                pagination={pagination} // Cambio en el nombre de la prop
                />
                <div className={style.pagination}>
                <CardContainer dogs={currentDogs} />
                </div>
                </>
                );
            };
            
            export default Home;
            