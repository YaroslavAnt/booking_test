import axios from "axios";
import { observable, action } from 'mobx';

const url = 'https://web-ninjas.net/tickets';
const putUrl = 'https://web-ninjas.net/ticket';
const config = {
  headers: {
    'Authorization': localStorage.getItem("token")
  }
}

export default class TicketsStore {
  @observable ticketsData = {
    tickets: [],
    err: null,
    isLoading: false
  }

  @action getTickets() {
    axios
      .get(`${url}`)
      .then(res => {
        const tickets = res.data;
        this.ticketsData.tickets = tickets;
      })
      .catch(err => {
        this.ticketsData.err = err
      });
  }

  @action postTicket(hall) {
    const { from, to } = hall;

    if (new Date().getTime() > from) {
      this.ticketsData.err = "This time is already past"
    } else if (from > to) {
      this.ticketsData.err = "End must be later then start"
    } else {
      axios
        .post(url, hall, config)
        .then(() => {
          this.getTickets();
        })
        .catch(err => {
          this.ticketsData.err = err.message;
        });
    }
  }

  @action putTicket(hall, ticketId) {
    const { from, to } = hall;

    if (new Date().getTime() > from) {
      this.ticketsData.err = "This time is already past"
    } else if (from > to) {
      this.ticketsData.err = "End must be later then start"
    } else {
      axios
        .put(`${putUrl}/${ticketId}`, { from, to, title: "event" }, config)
        .then(() => {
          this.getTickets();
        })
        .catch(err => {
          this.ticketsData.err = err.message;
        });
    }
  }

  @action deleteTickets(ticketId) {
    axios
      .delete(`${url}/${ticketId}`, config)
      .then(res => {
        this.getTickets();
      })
      .catch(err => {
        this.ticketsData.err = err.message;
      });
  }
}