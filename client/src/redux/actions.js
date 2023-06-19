import axios from "axios";
export const GET_DOGS = "GET_DOGS";

export const getDogs = () => {
    return async function (dispatch) {
        const apiata = await axios.get("http://localhost:3001/dogs");
        const dogs = apiata.data;
        dispatch({ type: GET_DOGS, payload:  dogs  });
    };
};

