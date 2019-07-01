import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Typography, Button, Dialog, DialogTitle } from '@material-ui/core';
import { Link } from "react-router-dom";

import { signUp, authFail } from '../../redux/actions/auth';
import Page from '../../layouts/Page/Page';
import '../../styles/index.scss'
import FormSignupRedux from '../../components/FormSignupRedux/FormSignupRedux';

class SignUp extends React.Component {

  state = {
    open: true
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleError = () => {
    this.props.onConfirm();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData: { values } } = this.props;
    this.props.onSubmit(values);
  }

  render() {
    const { isSignedUp, err, formData } = this.props;

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
      return (
        <Page>
          <Dialog
            open={true}
            onClose={this.handleError}
            aria-labelledby="simple-dialog-title" >
            <DialogTitle id="simple-dialog-title">{err}</DialogTitle>
          </Dialog>
        </Page>
      )
    }

    return (
      <Page>
        <FormSignupRedux handleSubmit={(e) => this.handleSubmit(e)} formType="Sign Up" formData={formData}>
          <Typography align='center'> Have an account? </Typography>
          <Link to={'/sign-in'}>
            <Button variant='text' color='secondary'>Login</Button>
          </Link>
        </FormSignupRedux>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedUp: state.auth.userId !== null,
    err: state.auth.err,
    formData: state.form.formSignupRedux
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ({ email, password }) => dispatch(signUp(email, password)),
    onConfirm: () => dispatch(authFail(null))
  };
};

SignUp.propTypes = {
  isSignedUp: PropTypes.bool,
  err: PropTypes.string,

  onSubmit: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);