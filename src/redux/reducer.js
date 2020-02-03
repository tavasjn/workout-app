import axios from "axios";

const initialState = {
  email: "",
  user: {},
  loggedIn: false
};

const UPDATE_EMAIL = "UPDATE_EMAIL";
const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";

export function updateEmail(emailObj) {
  return {
    type: UPDATE_EMAIL,
    payload: emailObj
  };
}

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/getUser").then(res => res.data)
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios
      .get(`/api/logout`)
      .then(res => console.log("delete", res))
      .catch(err => console.log(err))
  };
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER + "_PENDING":
      return { ...state };
    case GET_USER + "_FULFILLED":
      return { ...state, user: payload, loggedIn: true };
    case LOGOUT + "_FULFILLED":
      return { user: {}, users: {}, loggedIn: false };
    case UPDATE_EMAIL:
      let email = payload;
      return { ...state, email };
    default:
      return state;
  }
}
