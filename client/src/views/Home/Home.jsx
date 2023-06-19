import React, { useState, useEffect } from "react";
import CardContainer from "../../components/CardsContainer/CardContainer";
import Pagination from "../../components/Paginado/Paginado";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);
    
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
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
        <select>
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
        <Pagination
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        pagination={pagination}
        currentPage={currentPage}
        />
        <div className={style.pagination}>
        <CardContainer dogs={currentDogs} />
        </div>
        </>
        );
    };
    
    export default Home;
    