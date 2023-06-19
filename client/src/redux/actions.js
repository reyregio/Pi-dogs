import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS="GET_TEMPERAMENTS"
export const FILTER_BY_TEMPERAMENT="FILTER_BY_TEMPERAMENT"

export const getDogs = () => {
    return async function (dispatch) {
        const apiata = await axios.get("http://localhost:3001/dogs");
        const dogs = apiata.data;
        dispatch({ type: GET_DOGS, payload:  dogs  });
    };
};

export const getTemperaments = () => (dispatch) => {
    return fetch("http://localhost:3001/temperaments")
    .then((data) => data.json())
    .then((data) =>
    dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
    })
    );
};
export const filterByTemperament = (payload) => {
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload,
    };
};