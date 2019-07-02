import React from 'react';
import { Paper, Typography, withStyles, Avatar, Dialog, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

import Page from '../../layouts/Page/Page';
import Spinner from '../../components/Spinner/Spinner';
import RoomScedule from '../../components/RoomScedule/RoomScedule';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
    margin: 20
  },

  bigAvatar: {
    width: '100%',
    maxWidth: 360,
    height: 260,
    borderRadius: 10,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

@inject('ticketsStore', 'hallsStore')
@observer
class Hall extends React.Component {

  @observable open = true;

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.confirmErr();
    this.handleOpen();
  };

  render() {
    const {
      classes,
      hallsLoading,
      hallsErr,
      hallsStore: { data: { halls } },
      user_id,
      ticketsStore: { ticketsData: { tickets } },
      ticketsErr,
      ticketsLoading,
    } = this.props;

    const hallId = this.props.match.params.hall_id;
    const hall = halls.find(hall => hall._id === hallId);
    localStorage.setItem("currentHallId", hallId)

    if (hallsLoading || ticketsLoading) {
      return (
        <Page>
          <Spinner />
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

    if (!hall) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <Page>
        {hall && <Paper className={classes.root} elevation={1}>
          <Typography variant="title" component="h3">
            {hall.title}
          </Typography>

          <Avatar
            alt={hall.title}
            src={hall.imageURL}
            className={classes.bigAvatar}
          />

          <Typography variant='subtitle1'>
            {hall.description}
          </Typography>

          <RoomScedule tickets={tickets} hallId={hall._id} userId={user_id} />
        </Paper>}
      </Page>
    );
  }
}

Hall.propTypes = {
  hall: PropTypes.object,
  hallsErr: PropTypes.string,
  ticketsErr: PropTypes.string,
  hallsLoading: PropTypes.bool,
  ticketsLoading: PropTypes.bool,

  getTickets: PropTypes.func,
  confirmErr: PropTypes.func,
}

export default (withStyles(styles)(Hall));

