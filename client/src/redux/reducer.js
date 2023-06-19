import { GET_DOGS, GET_ALL_TEMPERAMENT,FILTER_TEMPERAMENT } from "./actions";

const initialState = {
    dogs: [],
    temperaments: [],
    dogsFilter: [], 
};

const rootReducer = (state = initialState, action) => {
    let pj = [];
    switch (action.type) {
        case GET_DOGS:
        return { ...state, dogs: action.payload };
        
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
        
        default:
        return { ...state };
    }
};

export default rootReducer;
