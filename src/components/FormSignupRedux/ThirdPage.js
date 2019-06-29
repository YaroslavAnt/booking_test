import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, Typography, withStyles } from '@material-ui/core';
import { validate } from './Validate';

const styles = () => ({
    marginBottom: {
        marginBottom: 20
    },
    form: {
        width: 300,
        marginTop: 20,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    }
})

const ThirdPage = (props) => {
    const { handleSubmit, formData, classes, handleBack } = props;
    console.log(formData)

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant='subtitle1' className={classes.marginBottom}>
                Your email: {formData.values.email}
            </Typography>

            <Typography variant='subtitle1' className={classes.marginBottom}>
                Your password: {formData.values.password}
            </Typography>

            {formData.values.company && (
                <Typography variant='subtitle1' className={classes.marginBottom}>Your company: {formData.values.company}</Typography>
            )}

            <Typography variant='subtitle1' className={classes.marginBottom}>
                Your country: {formData.values.country.label}
            </Typography>

            <Typography variant='subtitle1' className={classes.marginBottom}>
                Your birthday: {formData.values.birthdate}
            </Typography>

            <Button
                variant='text'
                color='primary'
                onClick={handleBack}
                className={classes.marginBottom}
            >
                Back
            </Button>

            <Button
                variant='contained'
                color='secondary'
                type='submit'
            >
                Submit
            </Button>
        </form>
    );
}

export default reduxForm({
    validate,
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    form: 'formSignupRedux'
})(withStyles(styles)(ThirdPage));