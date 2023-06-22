import React, { useState, useEffect } from "react";
import CardContainer from "../../components/CardsContainer/CardContainer";
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";

import {
    getDogs,
    getAllTemperament,
    filterTemperament,
    filterCreated,
    orderByname,
    orderByWeight,

} from "../../redux/actions.js";
import style from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    let { temperaments, dogsFilter } = useSelector((state) => state);


    useEffect(() => {

        dispatch(getDogs());
        dispatch(getAllTemperament());
    }, [dispatch]);


    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogsFilter.slice(indexOfFirstDog, indexOfLastDog);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);


    function handleFilterByTemperament(e) {
        e.preventDefault(e);
        dispatch(filterTemperament(e.target.value));
        setCurrentPage(1);
    }

    const [filterBreed, setFilterBreed] = useState("");
    const handleFilterCreatedDB = (e) => {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setFilterBreed(e.target.value);
        setCurrentPage(1);
    };

    const [order, SetOrder] = useState('');

    const handleOrder = (e) => {
        e.preventDefault();
        dispatch(orderByname(e.target.value))
        setCurrentPage(1);
        SetOrder(`Ordenado ${e.target.value}`)

    }
    function handleSortWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        SetOrder(e.target.value);
    }

    return (
        <>

            <div>
                <div className={style.top}>
                    <h1 className={style.title}>DOG PORTAL</h1>
                    <p className={style.para}>Elige tu proximo perro </p>
                    <SearchBar />

                </div></div>
            <div>
                <select className={style.select}
                    onChange={(e) => handleOrder(e)}>
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
                <select value={filterBreed} onChange={e => handleFilterCreatedDB(e)}
                    className={style.select}>
                    <option value="all">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Existentes</option>
                </select>
                <select defaultValue="WEIGHT" className={style.select} onChange={(e) => handleSortWeight(e)}>
                    <option value="WEIGHT" disabled selected>
                        Order by weight
                    </option>
                    <option value="min">Weight Min</option>
                    <option value="max">Weight Max</option>
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
