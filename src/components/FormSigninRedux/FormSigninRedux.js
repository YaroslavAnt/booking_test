import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Paper, TextField, withStyles, Button } from '@material-ui/core';


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

const validate = values => {
  const errors = {}
  const requiredFields = ['email', 'password']

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Short password'
  }

  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

const FormAuthRedux = (props) => {
  const { classes, formType, handleSubmit, formData } = props;
  const errors = formData ? formData.syncErrors : true

  return (
    <div className={classes.login}>
      <Paper >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e)
          }}
          className={classes.form}
        >
          <div>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
            />
          </div>
          <br />

          <div>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
            />
          </div>
          <br />

          <Button
            variant='contained'
            color='secondary'
            type='submit'
            className={classes.button}
            disabled={!!errors}
          >
            {formType}
          </Button>
        </form>

        <div className={classes.margin + ' ' + classes.text}>
          {props.children}
        </div>

      </Paper>
    </div>
  );
}

export default reduxForm({
  form: 'formAuthRedux',
  validate,
})(withStyles(styles)(FormAuthRedux));

