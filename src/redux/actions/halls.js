import * as actionTypes from './actionTypes'
import axios from "axios";

const url = 'https://web-ninjas.net/halls';

const config = {
  headers: {
    'Authorization': localStorage.getItem("token")
  }
}

export const loadHalls = () => {
  return dispatch => {
    dispatch(loadInit());

    axios
      .get(url, config)
      .then(res => {
        const { halls } = res.data;

        dispatch(loadSuccess(halls));
      })
      .catch(err => {
        dispatch(loadFail(err.message))
      });
  };
};

export const loadInit = () => {
  return {
    type: actionTypes.LOAD_HALLS_INIT
  }
}

export const loadSuccess = (halls) => {
  return {
    type: actionTypes.LOAD_HALLS_SUCCES,
    halls
  };
};

export const loadFail = (err) => {
  return {
    type: actionTypes.LOAD_HALLS_FAIL,
    err
  };
};

export const setHallId = (hall_id) => {
  console.log(hall_id)
  return {
    type: actionTypes.SET_HALL_ID,
    hall_id
  }
}