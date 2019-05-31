import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './RenderTextField';
import { Button, withStyles } from '@material-ui/core';
import { validate } from './Validate';
import { renderCountrysList } from './RenderCountrysList';
import { renderDatePicker } from './RenderDatePicker';

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

const SecondPage = (props) => {
    const { handleSubmit, formData, classes } = props;
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div>
                <Field
                    name="company"
                    component={renderTextField}
                    label="Company"
                    type="text"
                />
            </div>
            <br />

            <div>
                <Field
                    name="country"
                    component={renderCountrysList}
                    label="country"
                    type="select"
                />
            </div>
            <br />

            <div>
                <Field
                    name="birthdate"
                    component={renderDatePicker}
                    type="date"
                />
            </div>
            <br />

            <Button
                type='submit'
                variant='contained'
                color='secondary'
                disabled={formData ? !!(formData.syncErrors) : true}
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
})(withStyles(styles)(SecondPage));