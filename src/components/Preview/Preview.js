import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment";


import './Preview.scss'
import { observer, inject } from 'mobx-react';

@inject('ticketsStore')
@observer
class Preview extends Component {

  render() {
    const { ticketsStore: { ticketsData: { tickets } }, currentDay } = this.props;

    const currentHallId = localStorage.getItem("currentHallId");

    const hallTickets = tickets.filter(ticket => {
      return ticket.hall_id === currentHallId
    })

    return (
      <div className="preview">
        {new Array(8).fill(null).map((el, idx) => {

          const isBooked = hallTickets.some(ticket => {
            return moment(`${moment(currentDay).format('YYYY-MM-DD')}T1${idx}:01`).isBetween(ticket.from, ticket.to, 'milliseconds');
          })

          return <span key={idx} className={`mark ${isBooked && 'booked'}`}></span>
        })}
      </div>
    );
  }
}



export default Preview;