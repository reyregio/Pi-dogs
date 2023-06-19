import {
    GET_DOGS,
    GET_ALL_TEMPERAMENT,
    FILTER_TEMPERAMENT,
    FILTER_CREATED,
} from "./actions";

const initialState = {
    dogs: [],
    temperaments: [],
    dogsFilter: [],
    allDogs: [],
};

const rootReducer = (state = initialState, action) => {
    let pj = [];
    
    switch (action.type) {
        case GET_DOGS:
        return { ...state, dogs: action.payload, allDogs: action.payload };
        
        case GET_ALL_TEMPERAMENT:
        return {
            ...state,
            temperaments: action.payload,
        };
        
        case FILTER_TEMPERAMENT:
        pj =
        action.payload === "all"
        ? state.dogs // Cambio "allDogs" a "dogs"
        : state.dogs.filter((dog) => {
            if (!dog.temperament) return undefined;
            return dog.temperament.includes(action.payload);
        });
        
        return {
            ...state,
            dogsFilter: pj,
        };
        case FILTER_CREATED:
        if (action.payload === "all") {
            pj = state.allDogs; // si el filtro es all, muestro todos los perros
        } else if (action.payload === "api") {
            pj = state.allDogs.filter((dog) => !dog.createdInBd); // filtro por perros creados por la API
        } else {
            pj = state.allDogs.filter((dog) => dog.createdInBd); // filtro por perros creados en la BD
        }
        return {
            ...state,
            dogsFilter: pj,
        };
        
        default:
        return { ...state };
    }
};

export default rootReducer;
