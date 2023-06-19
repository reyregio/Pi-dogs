import React from "react";
import style from "./Paginado.module.css";
const Paginado = ({ dogsPerPage, allDogs, pagination }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handlePageClick = (number, e) => {
        e.preventDefault();
        pagination(number);
    };
    
    return (
        <div>
        <nav>
        <ul className={style.pagination}>
        {pageNumbers.map((number) => (
            <li key={number} className={style.listas}>
            <a href="/#" onClick={(e) => handlePageClick(number, e)}>{number}</a>
            </li>
            ))}
            </ul>
            </nav>
            </div>
            );
        };
        
        export default Paginado;