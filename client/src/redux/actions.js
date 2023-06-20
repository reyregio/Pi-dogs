import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_ALL_TEMPERAMENT="GET_ALL_TEMPERAMENT";
export const FILTER_TEMPERAMENT="FILTER_TEMPERAMENT";
export const FILTER_CREATED="FILTER_CREATED"
export const ORDER_BY_NAME="ORDER_BY_NAME"
export const GET_NAME="GET_NAME"
export const getDogs = () => {
    return async function (dispatch) {
        const apiata = await axios.get("http://localhost:3001/dogs");
        const dogs = apiata.data;
        dispatch({ type: GET_DOGS, payload:  dogs  });
    };
};

export const getAllTemperament = () => {
    return async function (dispatch){
        const backdata =await axios.get("http://localhost:3001/temperaments") 
        const temperaments= backdata.data;
        dispatch({type:GET_ALL_TEMPERAMENT,payload:temperaments})
    }
}

export const filterTemperament = (temperament) => {
    return {
        type: FILTER_TEMPERAMENT,
        payload: temperament
    }
}
export function filterCreated(payload){
    
    return{
        type:'FILTER_CREATED',
        payload
    }
    
}
export const orderByname = (payload) => {
    return {
        type:ORDER_BY_NAME,
        payload: payload
    }
}

export const getDogsByName = (name) => {
    return async function (dispatch) {
        try{
            const backDogs = await axios.get("http://localhost:3001/dogs?name="+name);
            return dispatch({ type: GET_NAME, payload:  backDogs.data  });
            
        }catch (error){
            console.log(error);
        }
    };
};