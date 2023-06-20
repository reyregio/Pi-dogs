import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperament, postDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Form.module.css"

const Form = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)
    
    useEffect(() => {
        dispatch(getAllTemperament());
    }, []);
    
    const [form, setForm] = useState({
        name: "",
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        lifeSpanMax: 0,
        lifeSpanMin: 0,
        temperment: [],
        image: ""
        
        
    });
    const [errors, setErrors] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeSpanMax: "",
        lifeSpanMin: "",
        temperment: [],
        image: ""
    });
    
    const changeHAndler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    };
    
    const [input, setInput] = useState({
        name: "",
        life_span: "",
        image: "",
        temperament: [],
        minWeight: "",
        maxWeight: "",
        minHeight: "",
        maxHeight: "",
    });
    function handleSelect(e) {
        if (input.temperament.find((t) => t.id === e.target.value.split(",")[0])) {
            console.log({ input });
            alert("Already in the list");
        } else {
            setInput({
                ...input,
                temperament: [
                    ...input.temperament,
                    {
                        id: e.target.value.split(",")[0],
                        name: e.target.value.split(",")[1],
                    },
                ],
            });
        }
    }
    const handleDelete = (e) => {
        setInput({
          ...input,
          temperament: input.temperament.filter((c) => c !== e.target.name),
        });
      };
    
    const validate = (form) => {
        if (/^[a-zA-Z\s]+$/.test(form.name)) {
            setErrors({ ...errors, name: "" });
        } else {
            setErrors({ ...errors, name: "Hay un error en el name" });
        }
        if (form.name === "") setErrors({ ...errors, name: "nombre vacio" });
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/dogs", form)
        .then(res => alert(res))
        .catch(err => alert(err))
        
    };
    //     Nombre.
    // Altura (diferenciar entre altura mínima y máxima de la raza).
    //Altura mínima: /^\d+(\.\d+)?$/
    //Altura máxima: /^\d+(\.\d+)?$/
    
    // Peso (diferenciar entre peso mínimo y máximo de la raza).
    //     Peso mínimo: /^\d+(\.\d+)?$/
    // Peso máximo: /^\d+(\.\d+)?$/
    
    // Años de vida.
    ///^\d+$/
    
    // Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
    // Botón para crear la nueva raza.
    
    return (<div className={style.container}>
        <Link to="/home">HOME </Link>
        <h2>Crea tu raza</h2>
        <form onSubmit={submitHandler}>
        <div>
        <label className={style.label} htmlFor="">Nombre:</label>
        <input
        className={style.input}
        type="text"
        value={form.name}
        onChange={changeHAndler}
        name="name"
        />
        <span>{errors.name}</span>
        </div>
        <div>
        
        <label htmlFor="" className={style.label}>Altura mínima:</label>
        <input
        type="text"
        value={form.heightMin}
        onChange={changeHAndler}
        name="heightMin"
        />
        </div>
        <div>
        
        <label htmlFor="">Altura máxima:</label>
        <input
        type="text"
        value={form.heightMax}
        onChange={changeHAndler}
        name="heightMax"
        />
        </div>
        <div>
        
        <label htmlFor="">Peso mínimo:</label>
        <input
        type="text"
        value={form.weightMin}
        onChange={changeHAndler}
        name="weightMin"
        />
        </div>
        <div>
        
        <label htmlFor="">Peso maximo:</label>
        <input
        type="text"
        value={form.weightMax}
        onChange={changeHAndler}
        name="weightMax"
        />
        </div>
        <div>
        
        <label htmlFor="">Años de vida minimos:</label>
        <input
        type="text"
        value={form.lifeSpanMin}
        onChange={changeHAndler}
        name="lifeSpanMin"
        />
        </div>
        <div>
        
        <label htmlFor="">Años maximos de vida:</label>
        <input
        type="text"
        value={form.lifeSpanMax}
        onChange={changeHAndler}
        name="lifeSpanMax"
        />
        </div>
        <div>
        <select onChange={(e) => handleSelect(e)}>
        {temperaments?.map((el, i) => (
            <option value={`${el.id},${el.name}`} key={i}>
            {el.name}
            </option>
            ))}
            </select>
            </div>
            
            
            <div>
            {input.temperament.map((el, i) => (
                <button
                key={i}
                type="reset"
            
                >
                {el.name} X
                </button>
                ))}
                {errors.temperament && <p className="error">{errors.temperament}</p>}
                </div>
                <div>
                
                <label htmlFor="">Imagen</label>
                <input
                type="text"
                value={form.image}
                onChange={changeHAndler}
                name="image"
                />
                </div>
                
                <button type="submit">Crear Personaje</button>
                </form>
                </div>
                );
            };
            export default Form;
            