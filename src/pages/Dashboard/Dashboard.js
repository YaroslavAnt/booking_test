import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Dialog, DialogTitle } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import Page from '../../layouts/Page/Page';

import './Dashboard.scss'
import Spinner from '../../components/Spinner/Spinner';
import RoomListItem from '../../components/RoomListItem/RoomListItem';

@inject('hallsStore', 'ticketsStore')
@observer
class Dashboard extends React.Component {

  @observable open = true;

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.hallsStore.fetchHalls();
    this.props.ticketsStore.getTickets();
  }

  render() {
    let { hallsStore: { data }, err, isLoading } = this.props;
    console.log(data.halls)

    if (isLoading) {
      return (
        <Page >
          <Spinner />
        </Page>
      )
    }

    if (err) {
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
      <Page >
        <div className="dashboard">
          {
            data.halls.map((hall, idx) => {
              return (
                <div className="dashboard__item" key={hall._id}>
                  <Link to={`/hall/${hall._id}`}>
                    <RoomListItem hall={hall} roomNumber={idx} />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  halls: PropTypes.array,
  err: PropTypes.string,
  isLoading: PropTypes.bool,
  loadHalls: PropTypes.func,
  loadTickets: PropTypes.func,
}

export default (Dashboard);

