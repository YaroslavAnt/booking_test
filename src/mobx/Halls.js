import axios from "axios";
import { observable, action } from 'mobx';

const url = 'https://web-ninjas.net/halls';

const config = {
  headers: {
    'Authorization': localStorage.getItem("token")
  }
}

export default class HallsStore {
  @observable data = {
    halls: [],
    err: null,
    isLoading: false
  }

  @action fetchHalls() {
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

