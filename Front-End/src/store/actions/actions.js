import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../reducers/loginReducer";
import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
} from "../reducers/userReducer";
import axios from "axios";

// Login action, appeller quand utilisateur tente de ce connecter avec email et password
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",

      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    dispatch(userProfile(data.body.token));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// User's profile action, appeller pour récupérer les infos de profil utilisateur depuis backend
export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    );

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// User's update profile, utilisé quand on veut mettre a jours son profil
export const updateUserProfile =
  (token, newUserName, newFirstName, newLastName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          userName: newUserName,
          firstName: newFirstName,
          lastName: newLastName,
        },
        config
      );

      dispatch({ type: USER_PROFILE_UPDATE, payload: data });
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Logout action, appeller quand utilisateur se déconnecte
export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_PROFILE_RESET });
};
