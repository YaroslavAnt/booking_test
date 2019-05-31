import React from 'react';
import moment from 'moment';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import './RoomScedule.scss';
import DayScedule from '../DayScedule/DayScedule';

import Calendar from '../MyCalendar/MyCalendar';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 400,
    marginBottom: 20
  }
});

class RoomScedule extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    start: '10:00',
    end: '11:00',
    open: false,
  }

  onChangeTime = (e) => {
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

  onChangeDay = (date) => {
    this.setState({
      date
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <form className="roomscedule" noValidate onSubmit={this.onAdd}>
          <div className="picker-container">
            <Calendar onChangeDay={(date) => this.onChangeDay(date)} />
          </div>

          <Typography variant='h4' align='center'>Scedule for {date}</Typography>

          <Typography variant='subtitle1' align='center'>Click cell for more info</Typography>

          <DayScedule currentDate={this.state} {...this.props} />
        </form>
      </div>
    )
  }
}

RoomScedule.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default (withStyles(styles)(RoomScedule));

