import React from 'react';
import moment from 'moment';
import { Typography, Dialog } from '@material-ui/core';

import './DaySceduleCell.scss';
import FormBooking from '../FormBooking/FormBooking';
import FormCorrect from '../FormCorrect/FormCorrect';


class DaySceduleCell extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // const currentRoom = sessionStorage.getItem("currentRoom")
    // const { items } = JSON.parse(localStorage.getItem("data" + currentRoom)) || { items: [] };
    const { hours, currentDate, tickets, hallId } = this.props;
    const { date } = currentDate;

    const userId = localStorage.getItem("userId");
    const hallTickets = tickets.filter(ticket => ticket.hall_id === hallId);
    const usertickets = hallTickets.filter(ticket => ticket.user_id === userId);
    const isBookedTime = hallTickets.find(ticket => moment(date + 'T' + hours + ':01').isBetween(ticket.from, ticket.to, 'millisecond'));
    const isMineBooking = usertickets.find(ticket => moment(date + 'T' + hours + ':01').isBetween(ticket.from, ticket.to, 'millisecond'));

    return (
      <div className="cell">
        <div className="hours">{hours}:00- {hours + 1}:00</div>

        <div className={`mark ${isBookedTime ? 'booked' : 'free'} `} onClick={this.handleOpen}>
          {isMineBooking && (
            <Typography>*</Typography>
          )}
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          {isBookedTime ? (
            <FormCorrect date={date} hours={hours} isMineBooking={isMineBooking} isBookedTime={isBookedTime} />
          ) : (
              <FormBooking date={date} hours={hours} />
            )}
        </Dialog>
      </div>
    );
  }
}


export default DaySceduleCell;
