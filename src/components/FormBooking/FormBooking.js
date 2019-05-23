import React, { Component } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { TextField, withStyles, Button } from '@material-ui/core';
import { postTicket } from '../../redux/actions/tickets';
import Done from '@material-ui/icons/Done';


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
  }
});

class FormBooking extends Component {
  state = {
    date: this.props.date,
    start: `${this.props.hours}:00`,
    end: `${this.props.hours + 1}:00`,
    title: '',
    open: false,
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
  }

  onAdd = () => {
    const { date, start, end, title } = this.state;

    this.props.postTicket({
      hall_id: localStorage.getItem("currentHallId"),
      user_id: localStorage.getItem("userId"),
      from: new Date(date + 'T' + start).getTime() + 1,
      to: new Date(date + 'T' + end).getTime() - 1,
      title
    });
  }

  render() {
    const { classes, date } = this.props;
    const { title, start, end } = this.state;
    const isAuthenticated = !!localStorage.getItem("token");

    return (
      <div className="flexbox col pd-20">
        <TextField
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
          label="Book room for date"
          type="date"
          name='newDate'
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


        {isAuthenticated ? (
          <Button
            color='secondary'
            onClick={this.onAdd}
            aria-label="Done"
          >
            <Done />
          </Button>
        ) : (
            <Link to={'/sign-in'}>
              <Button variant='text' color='secondary'>Sign in to book</Button>
            </Link>
          )}
      </div>
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
    postTicket: (user) => dispatch(postTicket(user))
  };
};

FormBooking.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  date: PropTypes.string,
  start: PropTypes.string,
  tickets: PropTypes.array.isRequired,
  postTicket: PropTypes.func.isRequired,
  correctTicket: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FormBooking));