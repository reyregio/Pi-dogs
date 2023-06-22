import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperament, postDogs } from "../../redux/actions";

import style from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    
    useEffect(() => {
        dispatch(getAllTemperament());
    }, [dispatch]);
    
    const [form, setForm] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_spanMax: "",
        life_spanMin: "",
        temperament: [],
        image: ""
    });
    
    const [errors, setErrors] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_spanMax: "",
        life_spanMin: "",
        temperament: [],
        image: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevState) => ({
            ...prevState,
            
            [name]: value
        }));
        validate(form)
    };
    
    const [input, setInput] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_spanMax: "",
        life_spanMin: "",
        temperament: [],
        image: ""
    });
    
    function handleSelect(e) {
        if (
            input.temperament &&
            input.temperament.find((t) => t.id === e.target.value.split(",")[0])
            ) {
                console.log({ input });
                alert("ya ha sido elegido");
            } else {
                setInput({
                    ...input,
                    temperament: [
                        ...(input.temperament || []),
                        {
                            id: e.target.value.split(",")[0],
                            name: e.target.value.split(",")[1]
                        }
                    ]
                });
            }
        }
        
        const handleDelete = (index) => {
            setInput((prevState) => {
                const newTemperament = [...prevState.temperament];
                newTemperament.splice(index, 1);
                return {
                    ...prevState,
                    temperament: newTemperament
                };
            });
        };
        
        const validate = (form) => {
            const errors = {};
            
            if (!/^[a-zA-Z\s]+$/.test(form.name)) {
                errors.name = "Nombre invalido";
            }
            
            if (!/^\d+(\.\d+)?$/.test(form.heightMin)) {
                errors.heightMin = "Altura mínima invalida";
            }
            
            if (!/^\d+(\.\d+)?$/.test(form.heightMax)) {
                errors.heightMax = "Altura máxima invalida";
            }
            
            if (!/^\d+(\.\d+)?$/.test(form.weightMin)) {
                errors.weightMin = "Peso mínimo invalido";
            }
            
            if (!/^\d+(\.\d+)?$/.test(form.weightMax)) {
                errors.weightMax = "Peso máximo invalido";
            }
            
            if (!/^\d+$/.test(form.life_spanMin)) {
                errors.life_spanMin = "Años de vida minimos invalidos";
            }
            
            if (!/^\d+$/.test(form.life_spanMax)) {
                errors.life_spanMax = "Años de vida maximos invalidos";
            }
            
            setErrors(errors);
            
            return Object.keys(errors).length === 0;
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (validate(form)) {
                dispatch(postDogs(form))
                .then((res) => {
                    console.log("Solicitud POST exitosa:", res);
                    alert("Raza creada correctamente");
                })
                .catch((error) => {
                    console.log("Error en la solicitud POST:", error);
                });
            }
        };
        
        return (
            <div className={style.container}>
            
            <h2>CREA TU RAZA</h2>
            <form onSubmit={handleSubmit}>
            <div>
            <label className={style.label} htmlFor="name">
            Nombre:
            </label>
            <input
            className={style.input}
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
            />
            {errors.name && <span className={style.error}>{errors.name}</span>}
            </div>
            <div>
            <label htmlFor="heightMin" className={style.label}>
            Altura mínima:
            </label>
            <input
            className={style.input}
            type="text"
            value={form.heightMin}
            onChange={handleChange}
            name="heightMin"
            />
            {errors.heightMin && <span className={style.error}>{errors.heightMin}</span>}
            </div>
            <div>
            <label htmlFor="heightMax">Altura máxima:</label>
            <input
            className={style.input}
            type="text"
            value={form.heightMax}
            onChange={handleChange}
            name="heightMax"
            />
            {errors.heightMax && <span className={style.error}>{errors.heightMax}</span>}
            </div>
            <div>
            <label htmlFor="weightMin">Peso mínimo:</label>
            <input
            className={style.input}
            type="text"
            value={form.weightMin}
            onChange={handleChange}
            name="weightMin"
            />
            {errors.weightMin && <span className={style.error}>{errors.weightMin}</span>}
            </div>
            <div>
            <label htmlFor="weightMax">Peso máximo:</label>
            <input
            className={style.input}
            type="text"
            value={form.weightMax}
            onChange={handleChange}
            name="weightMax"
            />
            {errors.weightMax && <span className={style.error}>{errors.weightMax}</span>}
            </div>
            <div>
            <label htmlFor="life_spanMin">Años de vida mínimos:</label>
            <input
            className={style.input}
            type="text"
            value={form.life_spanMin}
            onChange={handleChange}
            name="life_spanMin"
            />
            {errors.life_spanMin && <span className={style.error}>{errors.life_spanMin}</span>}
            </div>
            <div>
            <label htmlFor="life_spanMax">Años máximos de vida:</label>
            <input
            className={style.input}
            type="text"
            value={form.life_spanMax}
            onChange={handleChange}
            name="life_spanMax"
            />
            {errors.life_spanMax && <span className={style.error}>{errors.life_spanMax}</span>}
            </div>
            <div> <label>Temperamentos: </label>
            <select className={style.input} onChange={handleSelect}>
            {temperaments &&
                temperaments.map((el, i) => (
                    <option value={`${el.id},${el.name}`} key={i}>
                    {el.name}
                    </option>
                    ))}
                    </select>
                    </div>
                    <div>
                    {input.temperament.map((el, i) => (
                        <button
                        className={style.button}
                        key={i}
                        type="button"
                        onClick={() => handleDelete(i)}
                        >
                        {el.name} X
                        </button>
                        ))}
                        {errors.temperament && <p className={style.error}>{errors.temperament}</p>}
                        </div>
                        <div>
                        <label htmlFor="image">Imagen:</label>
                        <input
                        className={style.input}
                        type="text"
                        value={form.image}
                        onChange={handleChange}
                        name="image"
                        />
                        </div>
                        <button className={style.button} type="submit">Crear Raza</button>
                        </form>
                        </div>
                        );
                    };
                    
                    export default Form;
                    