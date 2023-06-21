import {
    GET_DOGS,
    GET_ALL_TEMPERAMENT,
    FILTER_TEMPERAMENT,
    FILTER_CREATED,
    ORDER_BY_NAME,
    GET_NAME,
    POST_DOGS,
    ERROR,
    GET_DOG_ID,
    ORDER_BY_WEIGHT
} from "./actions";

const initialState = {
    dogs: [],
    temperaments: [],
    dogsFilter: [],
    allDogs: [],
    error:false,
    detail:[]
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
        case ORDER_BY_NAME:
        let sortedName =
        action.payload === "asc"
        ? state.dogs.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (b.name > a.name) {
                return -1;
            }
            return 0;
        })
        : state.dogs.sort(function (a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (b.name > a.name) {
                return 1;
            }
            return 0;
        });
        return {
            ...state,
            dogs: sortedName,
        };
        case GET_NAME:
        return {
            ...state,
            dogs: action.payload,
        };
        case POST_DOGS:
        return {
            ...state,
            dogs: [...state.dogs, action.payload], // Agregar el perro creado al estado actual
            allDogs: [...state.allDogs, action.payload], // Agregar el perro creado al estado actual
        };
        case ERROR:
        return {
            ...state,
            
            error: !state.error,
        };
        case GET_DOG_ID:
        return {
            ...state,
            detail: action.payload,
        };
        
        case ORDER_BY_WEIGHT:
            if(action.payload === "min"){
                pj = state.dogsFilter.sort((a, b) => {
                    if(a.weightMin < b.weightMin) return -1; // si el peso de a es menor que el de b, a va antes que b
                    if(a.weightMin > b.weightMin) return 1; // si el peso de a es mayor que el de b, a va despues que b
                    return 0;
                })
            } else {
                pj = state.dogsFilter.sort((a, b) => {
                    if(a.weightMin > b.weightMin) return -1; // si el peso de a es mayor que el de b, a va antes que b
                    if(a.weightMin < b.weightMin) return 1; // si el peso de a es menor que el de b, a va despues que b
                    return 0;
                })
            }

            return{
                ...state,
                dogsFilter: pj
            }
        default:
        return { ...state };
    }
};

export default rootReducer;
