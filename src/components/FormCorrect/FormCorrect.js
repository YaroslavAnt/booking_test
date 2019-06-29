import React, { Component } from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { TextField, withStyles, Card, CardHeader, Avatar, CardContent, Typography, IconButton, Collapse, Button } from '@material-ui/core';
import Cached from '@material-ui/icons/Cached';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import { putTicket, deleteTickets } from '../../redux/actions/tickets';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  marginBottom: {
    marginBottom: 20
  },
  container: {
    color: 'red'
  },
  textField: {
    color: 'red'
  },
  avatar: {
    backgroundColor: '#C51161',
  },
});

class FormCorrect extends Component {
  state = {
    date: this.props.date,
    start: `${this.props.hours}:00`,
    end: `${this.props.hours + 1}:00`,
    title: '',
    expanded: false
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { date } = this.state;

    if (name === "start") {
      this.setState({
        end: moment(`${date}T${value}:00`).add(1, 'hours').format('HH:00')
      })
    }

    this.setState({
      [name]: value
    });

    sessionStorage.setItem([name], value);
  }

  onCorrect = e => {
    const { correctTicket, hallId, isMineBooking } = this.props;
    const { date, start, end } = this.state;

    correctTicket({
      hall_id: hallId,
      user_id: localStorage.getItem("userId"),
      from: new Date(`${date}T${start}`).getTime() + 1,
      to: new Date(`${date}T${end}`).getTime() - 1,
    }, isMineBooking._id);
  }

  onDelete = e => {
    const { deleteTicket, isMineBooking } = this.props;
    deleteTicket(isMineBooking._id);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, isMineBooking, isBookedTime } = this.props;
    const { title, start, end, date } = this.state;
    const isAuthenticated = !!localStorage.getItem("token");

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Info" className={classes.avatar}>
              I
            </Avatar>
          }
          title="About ticket"
        />

        <CardContent>
          <Typography component="p" variant='subtitle1'>
            Title: {isBookedTime.title}
          </Typography>

          <Typography component="p" variant='subtitle1'>
            From: {moment(isBookedTime.from).format('DD-MM-YYYY HH:mm')}
          </Typography>

          <Typography component="p" variant='subtitle1'>
            To: {moment(isBookedTime.to).format('DD-MM-YYYY HH:mm')}
          </Typography>

          <IconButton
            className={classes.expand}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            disabled={!(isAuthenticated && isMineBooking)}
            color='secondary'
            aria-label="Correct ticket"
          >
            <Cached />
          </IconButton>

          <IconButton
            color='secondary'
            onClick={this.onDelete}
            disabled={!(isAuthenticated && isMineBooking)}
            aria-label="Correct ticket">
            <Delete />
          </IconButton>
        </CardContent>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className="flexbox col">
              <TextField
                required={true}
                placeholder='Your event'
                id="title"
                label="Title"
                type="text"
                name='title'
                value={title}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChange}
              />

              <TextField
                id="date"
                label="Book room for new date"
                type="date"
                name='date'
                value={date}
                className={classes.textField}
                inputProps={{ min: moment().format('YYYY-MM-DD') }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.onChange}
              />

              <TextField
                id="time"
                label="Start event"
                type="time"
                name="start"
                value={start}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: "10:00", max: "18:00", step: "1" }}
                onChange={this.onChange}
              />

              <TextField
                id="time"
                label="End event"
                type="time"
                name='end'
                value={end}
                className={`${classes.textField} ${classes.marginBottom}`}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: start, max: "18:00", step: "1" }}
                onChange={this.onChange}
              />

              <Button
                color='secondary'
                disabled={title.length === 0}
                aria-label="Correct ticket"
                onClick={this.onCorrect}
              >
                <Done />
              </Button>
            </div>

          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    correctTicket: (user, ticketId) => dispatch(putTicket(user, ticketId)),
    deleteTicket: (ticketId) => dispatch(deleteTickets(ticketId)),
  };
};

FormCorrect.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string,
  start: PropTypes.string,
  tickets: PropTypes.array.isRequired,
  correctTicket: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FormCorrect));