import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { signIn, authFail } from '../../redux/actions/auth';
import Page from '../../layouts/Page/Page';
import { Dialog, DialogTitle, Typography, Button } from '@material-ui/core';
import FormSigninFormik from '../../components/FormSigninFormik/FormSigninFormik';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class Login extends React.Component {
  @observable open = false;
  @observable isAuthenticated = !!localStorage.getItem("token") || !!this.props.authStore.authData.token

  @action handleOpen = () => {
    this.open = true;
  };

  @action handleClose = () => {
    this.open = false;
    this.props.authStore.authData.err = null;
  };

  @action handleSubmit = (user) => {
    localStorage.setItem("email", user.email);
    this.props.authStore.signIn(user);
  }

  render() {
    const { authStore: { authData: { err } }, formData } = this.props;

    if (!!this.props.authStore.authData.token) {
      return (
        <Redirect exact to='/' />
      )
    }

    if (err) {
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
      <Page>
        <FormSigninFormik handleSubmit={this.handleSubmit} formData={formData}>
          <Typography align='center'>Have no account?</Typography>
          <Link to={'/sign-up'}>
            <Button variant='text' color='secondary'>SignUp</Button>
          </Link>
        </FormSigninFormik>
      </Page>
    )
  }
}

Login.propTypes = {
  err: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
}

export default (Login);

