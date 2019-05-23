﻿import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Typography, Button, Dialog, DialogTitle } from '@material-ui/core';
import { Link } from "react-router-dom";

import FormAuth from '../../components/FormAuth/FormAuth';
import { signUp, authFail } from '../../redux/actions/auth';
import Page from '../../layouts/Page/Page';
import '../../styles/index.scss'

class SignUp extends React.Component {

  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };

  handleRequest = (user) => {
    this.props.onSubmit(user);
    console.log(user);
  }

  render() {
    const { isSignedUp, err } = this.props;

    if (isSignedUp) {
      return (
        <Page>
          <div className='flexbox col align-center justify-center'>

            <Typography align='center' variant='h3'>Account created please </Typography>
            <br />
            <Link to={'/sign-in'}>
              <Button variant='text' color='secondary'>
                <Typography align='center' variant='h3'>Login</Typography>
              </Button>
            </Link>

          </div>
        </Page>
      )
    }

    if (err) {
      console.log(err);

      return (
        <Page>
          <Dialog
            open={true}
            onClose={this.handleClose}
            aria-labelledby="simple-dialog-title" >
            <DialogTitle id="simple-dialog-title">{err}</DialogTitle>
          </Dialog>
        </Page>
      )
    }

    return (
      <FormAuth userRequest={this.handleRequest} formType="Sign Up">
        <Typography align='center'> Have an account? </Typography>
        <Link to={'/sign-in'}>
          <Button variant='text' color='secondary'>Login</Button>
        </Link>
      </FormAuth>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedUp: state.auth.userId !== null,
    err: state.auth.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ({ email, password }) => dispatch(signUp(email, password)),
    onClose: () => dispatch(authFail(null))
  };
};

SignUp.propTypes = {
  isSignedUp: PropTypes.bool,
  err: PropTypes.string,

  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);