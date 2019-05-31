import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './RenderTextField';
import { Button, withStyles } from '@material-ui/core';
import { validate } from './Validate';

const styles = () => ({
    marginBottom: {
        marginBottom: 20
    },
    form: {
        width: 300,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const FirstPage = (props) => {
    const { handleSubmit, formData, classes } = props;
    const errors = formData ? formData.syncErrors : null

    console.log(formData);
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.marginBottom}>
                <Field
                    name="email"
                    component={renderTextField}
                    label="Email"
                    type="email"
                />
            </div>

            <div className={classes.marginBottom}>
                <Field
                    name="password"
                    component={renderTextField}
                    label="Password"
                    type="password"
                />
            </div>

            <Button
                type='submit'
                variant='contained'
                color='secondary'
                disabled={errors ? !!(errors.email || errors.password) : true}
            >
                Next
            </Button>
        </form>
    );
}

export default reduxForm({
    validate,
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    form: 'formSignupRedux'
})(withStyles(styles)(FirstPage));