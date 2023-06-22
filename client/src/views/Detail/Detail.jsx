import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogId } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import S from "./Detail.module.css";

export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [detail] = useSelector((state) => state.detail);
    
    useEffect(() => {
        dispatch(getDogId(id));
    }, [dispatch, id]);
    
    let name,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    life_spanMax,
    life_spanMin,
    image,
    temperaments;
    
    if (detail) {
        if (detail.name) {
            name = detail.name;
        }
        if (detail.weight) {
            const weightArray = detail.weight.split(" - ");
            weightMin = weightArray[0];
            weightMax = weightArray[1];
        } else if (detail.weightMin && detail.weightMax) {
            weightMin = detail.weightMin;
            weightMax = detail.weightMax;
        }
        if (detail.height) {
            const heightArray = detail.height.split(" - ");
            heightMin = heightArray[0];
            heightMax = heightArray[1];
        } else if (detail.heightMin && detail.heightMax) {
            heightMin = detail.heightMin;
            heightMax = detail.heightMax;
        }
        if (detail.life_span) {
            const lifeSpanArray = detail.life_span.split(" - ");
            life_spanMin = lifeSpanArray[0];
            life_spanMax = lifeSpanArray[1];
        } else if (detail.life_spanMin && detail.life_spanMax) {
            life_spanMin = detail.life_spanMin;
            life_spanMax = detail.life_spanMax;
        }
        if (detail.image) {
            image = detail.image;
        }
        if (detail.temperament && detail.temperament.length > 0) {
            temperaments = detail.temperament.join(", ");
        }
    }
    
    return (
        <div className={S.container}>
        <div className={S.header}>
        <h1>Mi raza es {name || "N/A"}</h1>
        </div>
        <div className={S.content}>
        <div className={S.imageContainer}>
        <img src={image} alt="" className={S.img} />
        </div>
        <div className={S.data}>
        <h4>Altura: {heightMin && heightMax ? `${heightMin} - ${heightMax}` : "N/A"}</h4>
        <h4>Peso: {weightMin && weightMax ? `${weightMin} - ${weightMax}` : "N/A"}</h4>
        <h3>Temperamentos: {temperaments || "N/A"}</h3>
        <p>Años de vida: {life_spanMin && life_spanMax ? `${life_spanMin} - ${life_spanMax}` : "N/A"}</p>
        </div>
        </div>
        <div className={S.footer}>
        <Link to="/home">
        <button className={S.button}>Volver</button>
        </Link>
        </div>
        </div>
        );
    }
    