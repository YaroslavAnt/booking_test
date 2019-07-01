import React from 'react';
import { Paper, withStyles, Button } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { validate } from './Validate';
import { renderTextField } from './RenderTextField';


const styles = () => ({
  login: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marginTop: {
    marginTop: 20
  },
  form: {
    width: 300,
    margin: '40px 0',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    color: '#faa'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const FormSigninFormik = (props) => {
  const { classes, handleSubmit } = props;

  return (
    <div className={classes.login}>
      <Paper >
        <Formik
          initialValues={{ email: '', password: '' }}

          validate={validate}
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          {({ touched, errors }) => {
            return (
              <Form className={classes.form}>
                <Field
                  type="email"
                  name="email"
                  render={renderTextField} />

                <ErrorMessage
                  name="email"
                  className={classes.error}
                  component="div" />

                <div className={classes.marginTop}>
                  <Field
                    type="password"
                    name="password"
                    render={renderTextField} />
                </div>


                <ErrorMessage
                  name="password"
                  className={classes.error}
                  component="div" />

                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  disabled={!!errors.email || !!errors.password || !touched.email}
                  className={classes.marginTop}>
                  Login
                </Button>
              </Form>
            )
          }}
        </Formik>

        <div className={'mb-40 ' + classes.text}>
          {props.children}
        </div>

      </Paper>
    </div>
  );
}

export default withStyles(styles)(FormSigninFormik);

