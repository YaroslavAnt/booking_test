﻿import React from 'react';
import { connect } from "react-redux";
import { Paper, Typography, withStyles, Avatar, Dialog, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';

import Page from '../../layouts/Page/Page';
import Spinner from '../../components/Spinner/Spinner';
import RoomScedule from '../../components/RoomScedule/RoomScedule';
import { loadHalls } from '../../redux/actions/halls';
import { getTickets, confirmErr } from '../../redux/actions/tickets';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20
  },

  bigAvatar: {
    width: '100%',
    maxWidth: 360,
    height: 260,
    borderRadius: 10
  },
});

class Room1 extends React.Component {

  state = {
    open: true,
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.confirmErr();
    this.handleOpen();
  };

  componentWillMount() {
    this.props.onLoad();
    this.props.getTickets();
  }

  render() {
    const { classes, halls, hallsErr, tickets, ticketsErr, hallsLoading, ticketsLoading } = this.props;
    const currentRoom = + localStorage.getItem("currentRoom") || 0;

    if (hallsLoading || ticketsLoading) {
      return (
        <Page>
          <Spinner></Spinner>
        </Page>
      )
    }

    if (hallsErr || ticketsErr) {
      const err = hallsErr || ticketsErr;

      return (
        <Page>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="simple-dialog-title" >
            <DialogTitle id="simple-dialog-title">{err}</DialogTitle>
          </Dialog>
        </Page>
      )
    }

    return (
      <Page>
        {halls.length !== 0 && <Paper className={classes.root} elevation={1}>
          <Typography variant="h3" component="h3">
            {halls[currentRoom].title}
          </Typography>

          <Avatar
            alt={halls[currentRoom].title}
            src={halls[currentRoom].imageURL}
            className={classes.bigAvatar}
          />

          <Typography variant='title'>
            {halls[currentRoom].description}
          </Typography>

          <RoomScedule tickets={tickets} />

        </Paper>}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    halls: state.halls.halls,
    hallsErr: state.halls.err,
    tickets: state.tickets.tickets,
    ticketsErr: state.tickets.err,
    hallsLoading: state.halls.isLoading,
    ticketsLoading: state.tickets.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(loadHalls()),
    getTickets: () => dispatch(getTickets()),
    confirmErr: () => dispatch(confirmErr())
  };
};

Room1.propTypes = {
  halls: PropTypes.array.isRequired,
  hallsErr: PropTypes.string,
  ticketsErr: PropTypes.string,
  hallsLoading: PropTypes.bool.isRequired,
  ticketsLoading: PropTypes.bool.isRequired,

  onLoad: PropTypes.func.isRequired,
  getTickets: PropTypes.func.isRequired,
  confirmErr: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Room1));
