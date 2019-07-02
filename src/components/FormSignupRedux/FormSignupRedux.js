import React from 'react';
import { reduxForm } from 'redux-form';
import { Paper, withStyles } from '@material-ui/core';
import { validate } from './Validate';
import FirstPage from './Page1';
import SecondPage from './Page2';
import ThirdPage from './Page3';


const styles = () => ({
  login: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  margin: {
    margin: 20
  },
  form: {
    width: 300,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


class FormAuthRedux extends React.Component {
  state = {
    page: 1
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { classes, handleSubmit, formData } = this.props;
    let { page } = this.state;

    return (
      <div className={classes.login}>
        <Paper >

          {page === 1 && (
            <FirstPage handleSubmit={this.nextPage} formData={formData} />
          )}

          {page === 2 && (
            <SecondPage handleSubmit={this.nextPage} handleBack={this.prevPage} formData={formData} />
          )}

          {page === 3 && (
            <ThirdPage handleSubmit={handleSubmit} handleBack={this.prevPage} formData={formData} />
          )}

          <div className={classes.margin + ' ' + classes.text}>
            {this.props.children}
          </div>

        </Paper>
      </div>
    );
  }
}

export default reduxForm({
  form: 'formSignupRedux',
  validate,
})(withStyles(styles)(FormAuthRedux));

