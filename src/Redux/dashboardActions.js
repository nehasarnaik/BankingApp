// userActions.js
import axios from "axios";

// Action Types
import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "./ActionType";

// Action Creators
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
//this shloud be done while login is succesfull
//sessionStorage.setItem("id", JSON.stringify(1));
const id = sessionStorage.getItem("id");
// Async Action to Fetch User Details
export const fetchUserDetails = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get(`http://localhost:4000/user/${id}`) // Enclose the URL in quotes
      .then((response) => {
        const user = response.data;
        console.log(user);
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
