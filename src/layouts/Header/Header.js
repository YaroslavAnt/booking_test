import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { Typography, Button, Snackbar, withStyles } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';

import './Header.scss'
import { logout } from '../../redux/actions/auth';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

@inject('authStore')
@observer
class Header extends React.Component {
  @observable open = false


  handleClose = () => {
    this.open = false;
  };

  handleOpen = () => {
    this.open = true;
  };

  handleLogout = () => {
    this.props.authStore.authData = {
      email: null,
      token: null,
      userId: null,
      err: null,
      loading: false,
    };
    localStorage.clear();
    this.open = false;
  }

  render() {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const { classes } = this.props;

    let controlls = (
      <div>
        <Link to={'/sign-in'}><Button variant='contained' color='secondary' className={classes.margin}>Sign In</Button></Link>
        <Link to={'/sign-up'}><Button variant='contained' color='secondary' className={classes.margin}>Sign Up</Button></Link>
      </div>
    )

    if (token) {
      controlls = (
        <div>
          <div className="controll">
            <Button onClick={this.handleOpen}>
              {token && <Typography color='secondary'>{email}</Typography>}
              <AccountCircle color='secondary' />
            </Button>
          </div>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={this.open}
            onClose={this.handleClose}
            message={
              <Link to='/'>
                <Button
                  onClick={this.handleLogout}
                  variant='contained'
                  color='secondary'
                >
                  LogOut
                </Button>
              </Link>
            } />
        </div>
      )
    }

    return (
      <div className="header">
        <NavLink exact to='/'><Typography variant="h1">BOOKING-TEST</Typography></NavLink>

        {controlls}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     token: state.auth.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogOut: () => dispatch(logout()),
//   };
// };

Header.propTypes = {
  token: PropTypes.string,
  onLogOut: PropTypes.func,
}

export default (withStyles(styles)(Header));

