import axios from "axios";

export const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

export const getUser = (name) => {
  return {
    type: REQUEST_USER_DETAILS,
    name: name,
  };
};

export const getData = (userInput) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.github.com/users/${userInput}`);
    dispatch({
      type: RECEIVE_USER_DETAILS,
      data: res.data,
    });
  };
};