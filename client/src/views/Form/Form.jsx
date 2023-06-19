import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        weight: 0,
        height: 0,
        temperment: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        weight: 0,
        height: 0,
        temperment: "",
    });
    
    const changeHAndler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    };
    
    const validate = (form) => {
        if (/^[a-zA-Z\s]+$/.test(form.name)) {
            setErrors({ ...errors, name: "" });
        } else {
            setErrors({ ...errors, name: "Hay un error en el name" });
        }
        if (form.name === "") setErrors({ ...errors, name: "name vacio" });
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/dogs",form)
        .then(res=>alert(res))
        .catch(err=>alert(err))

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
    
    return (
        <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="">Name</label>
        <input
        type="text"
        value={form.name}
        onChange={changeHAndler}
        name="name"
        />
        <span>{errors.name}</span>
        </div>
        <div>
        {" "}
        <label htmlFor="">weight</label>
        <input
        type="text"
        value={form.weight}
        onChange={changeHAndler}
        name="weight"
        />
        </div>
        <div>
        {" "}
        <label htmlFor="">Heigh</label>
        <input
        type="text"
        value={form.height}
        onChange={changeHAndler}
        name="heigh"
        />
        </div>
        <div>
        {" "}
        <label htmlFor="">temperament</label>
        <input
        type="text"
        value={form.temperment}
        onChange={changeHAndler}
        name="temperament"
        />
        </div>
        <button type="submit">SUBMIT</button>
        </form>
        );
    };
    export default Form;
    