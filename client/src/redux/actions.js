import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_ALL_TEMPERAMENT="GET_ALL_TEMPERAMENT";
export const FILTER_TEMPERAMENT="FILTER_TEMPERAMENT";


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
