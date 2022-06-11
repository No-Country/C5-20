import axios from "axios";
export const GET_APARTAMENTS_ONSALE = "GET_APARTAMENTS_ONSALE";
export const GET_IMAGE_CARROUSEL = "GET_IMAGE_CARROUSEL";
export const GET_BOOKINGS_FOR_THIS_DAY = "GET_BOOKINGS_FOR_THIS_DAY";
export const GET_SOCIAL_SPACES = "GET_SOCIAL_SPACES";
export const GET_IMAGE_BODY = "GET_IMAGE_BODY";
export const GET_DEPARTAMENT_ID = "GET_DEPARTAMENT_ID";
export const GET_HABITANTSFLOOR = "GET_HABITANTSFLOOR";

export const getApartament = (payload) => {
  try {
    // console.log(payload);
    return async function (dispatch) {
      const departa = await axios.get("http://localhost:5040/departs/filter", {
        params: payload,
      });
      dispatch({
        type: GET_APARTAMENTS_ONSALE,
        payload: departa.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getImageCarrusel = (payload) => {
  try {
    return async function (dispatch) {
      const image = await axios.get("http://localhost:5040/carrousel");
      dispatch({
        type: GET_IMAGE_CARROUSEL,
        payload: image.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getImageBody = (payload) => {
  try {
    return async function (dispatch) {
      const image = await axios.get("http://localhost:5040/carrousel/body");
      dispatch({
        type: GET_IMAGE_BODY,
        payload: image.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getBookingForThisDay = (payload) => {
  try {
    return async function (dispatch) {
      const bookingsDate = await axios.get("http://localhost:5040/bookings", {
        params: payload,
      });
      dispatch({
        type: GET_BOOKINGS_FOR_THIS_DAY,
        payload: bookingsDate.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getDepartamentId = (payload) => {
  try {
    return async function (dispatch) {
      const departament = await axios.get(
        "http://localhost:5040/departs/detail_departament",
        {
          params: payload,
        }
      );
      dispatch({
        type: GET_DEPARTAMENT_ID,
        payload: departament.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getSocialSpaces = (payload) => {
  try {
    return async function (dispatch) {
      const socialSpace = await axios.get(
        "http://localhost:5040/bookings/social_space"
      );
      dispatch({
        type: GET_SOCIAL_SPACES,
        payload: socialSpace.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getHabitantsPerFloor = (payload) => {
  try {
    return async function (dispatch) {
      const habitantsFloor = await axios.get(
        "http://localhost:5040/users/dashboard_habitants"
      );
      dispatch({
        type: GET_HABITANTSFLOOR,
        payload: habitantsFloor.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
