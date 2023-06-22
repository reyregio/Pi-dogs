const { Router } = require("express");
const axios = require("axios");
const { Temperament, Dog } = require("../db");
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const API = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getInfoApi = async () => {
    const dogUrl = await axios.get(API);
    const apiInfo = await dogUrl.data.map((el) => {
        return {
            id: el.id,
            name: el.name,
            image: el.image.url,
            weight: el.weight.metric, // Acceder a la unidad métrica del peso
            height: el.height.metric, // Acceder a la unidad métrica de la altura
            life_span: el.life_span,
            temperament: el.temperament ? el.temperament.split(", ") : [],
            // Convertir la cadena en un array
        };
    });
    return apiInfo;
};

const getDbdata = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};

const getAllBreeds = async () => {
    const Infoapi = await getInfoApi();
    const InfoDb = await getDbdata();
    const AllData = Infoapi.concat(InfoDb);
    return AllData;
};

router.get("/dogs", async (req, res) => {
    const name = req.query.name;
    const allDogs = await getAllBreeds();
    
    if (name) {
        const lowercaseName = name.toLowerCase();
        const filteredDogs = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(lowercaseName)
        );
        
        if (filteredDogs.length > 0) {
            res.status(200).send(filteredDogs);
        } else {
            res.status(400).send("No existe la raza");
        }
    } else {
        res.status(200).send(allDogs);
    }
});

//📍 GET | /temperaments
router.get("/temperaments", async (req, res) => {
    const tempApi = await axios(API);
    const tempDB = tempApi.data
    .map((t) => t.temperament) //creo muchos arreglos con las palabras
    .toString() // las convierto a string
    .split(",") // las separo por comas
    .map((t) => t.trim()) // las quito los espacios
    .filter((t) => t.length > 1); // las quito las palabras que tienen una longitud de 1
    const filtro = tempDB.filter((t) => t.length > 1); // filtrar los temperamentos con longitud mayor a 1
    let tempFilt = [...new Set(filtro)]; // hago un nuevo array con los temperamentos que tenia guardados y los nuevos, si se repiten se quitan
    
    tempFilt.forEach((t) => {
        // se fija si el temperamento esta, si esta no hace nada, si no lo crea
        Temperament.findOrCreate({
            // se fija si el temperamento esta, si esta no hace nada, si no lo crea
            where: { name: t }, // se fija si el temperamento esta en la bd
        });
    });
    
    const totalTemp = await Temperament.findAll(); // findAll trae todos los temperamentos de la bd
    res.json(totalTemp);
});

// POST | /dogsconst { Dog, Temperament } = require('../database/models');

router.post("/dogs", async (req, res) => {
    let {
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_spanMax,
        life_spanMin,
        temperament,
        image,
    } = req.body;
    
    if (!image) {
        try {
            image = (await axios.get("https://dog.ceo/api/breeds/image/random")).data.message;
        } catch (error) {
            console.log(error);
        }
    }
    
    if (
        name &&
        heightMin &&
        heightMax &&
        weightMin &&
        weightMax &&
        temperament &&
        image
        ) {
            try {
                const createDog = await Dog.create({
                    name: name,
                    heightMin: heightMin,
                    heightMax: heightMax,
                    weightMin: weightMin,
                    weightMax: weightMax,
                    life_spanMax: life_spanMax,
                    life_spanMin: life_spanMin,
                    image: image || "https://dog.ceo/api/breeds/image/random",
                    createdInBd: true,
                });
                
                const existingTemperaments = await Temperament.findAll({
                    where: { name: temperament },
                });
                
                // Split del string de temperamentos por comas y eliminación de espacios en blanco
                const newTemperaments = temperament.map((temp) => temp.trim());
                
                const createdTemperaments = await Promise.all(
                    newTemperaments.map(async (temp) => {
                        const [temperamentInstance, created] = await Temperament.findOrCreate({
                            where: { name: temp },
                            defaults: { name: temp },
                        });
                        return temperamentInstance;
                    })
                    );
                    
                    const dogTemperaments = await createDog.getTemperaments();
                    const allTemperaments = [...dogTemperaments, ...createdTemperaments];
                    await createDog.setTemperaments(allTemperaments);
                    
                    res.status(200).send(createDog);
                } catch (error) {
                    console.log(error);
                    res.status(500).send("Internal server error");
                }
            } else {
                res.status(400).send("Missing data to proceed");
            }
        });
        
        
        // /dogs/:idRaza
        
        router.get("/dogs/:idRaza", async (req, res) => {
            /* http://localhost:3001/dogs/7 */
            const idRaza = req.params.idRaza;
            const DogsTotal = await getAllBreeds();
            
            if (idRaza) {
                const dogID = await DogsTotal.filter((el) => el.id.toString() === idRaza);
                dogID.length
                ? res.status(200).json(dogID)
                : res.status(404).send("No se encontró esa raza");
            }
        });
        
        module.exports = router;
        