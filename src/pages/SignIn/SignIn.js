import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { signIn, authFail } from '../../redux/actions/auth';
import Page from '../../layouts/Page/Page';
import { Dialog, DialogTitle, Typography, Button } from '@material-ui/core';
import FormSigninFormik from '../../components/FormSigninFormik/FormSigninFormik';


class Login extends React.Component {

  state = { open: false }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };

  handleSubmit = (e) => {
    localStorage.setItem("email", e.email);
    this.props.onSubmit(e);
  }

  render() {
    const { err, formData, isAuthenticated } = this.props;

    if (isAuthenticated) {
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
            <Button variant='text' color='secondary'>Sign Up</Button>
          </Link>
        </FormSigninFormik>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    err: state.auth.err,
    formData: state.form.formAuthRedux,
    isAuthenticated: !!localStorage.getItem("token")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (user) => dispatch(signIn(user)),
    onClose: () => dispatch(authFail(null))
  };
};

Login.propTypes = {
  err: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

