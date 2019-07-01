import * as actionTypes from './actionTypes'
import axios from "axios";
import { observable, action, toJS } from 'mobx';


const url = 'https://web-ninjas.net/halls';

const config = {
  headers: {
    'Authorization': localStorage.getItem("token")
  }
}

// export const loadHalls = () => {
//   return dispatch => {
//     dispatch(loadInit());

//     axios
//       .get(url, config)
//       .then(res => {
//         const { halls } = res.data;

//         dispatch(loadSuccess(halls));
//       })
//       .catch(err => {
//         dispatch(loadFail(err.message))
//       });
//   };
// };

// export const loadInit = () => {
//   return {
//     type: actionTypes.LOAD_HALLS_INIT
//   }
// }

// export const loadSuccess = (halls) => {
//   return {
//     type: actionTypes.LOAD_HALLS_SUCCES,
//     halls
//   };
// };

// export const loadFail = (err) => {
//   return {
//     type: actionTypes.LOAD_HALLS_FAIL,
//     err
//   };
// };

// export const setHallId = (hall_id) => {
//   return {
//     type: actionTypes.SET_HALL_ID,
//     hall_id
//   }
// }

export default class HallsStore {
  constructor() {
    this.data = observable({
      halls: [],
      err: null,
      isLoading: false
    })
  }

  get(item) {
    return toJS(this.data[item]);
  }

  @action
  set(item, value) {
    this.data[item] = value;
  }

  @action
  fetchHalls() {
    this.data.isLoading = true;

    axios
      .get(url, config)
      .then(res => {
        const { halls } = res.data;
        this.data.halls = halls;
        this.data.isLoading = false;
      })
      .catch(err => {
        this.data.err = err;
        this.data.isLoading = false;
      });
  }
}