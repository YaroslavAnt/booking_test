﻿import React from 'react';
import { TextField, InputLabel } from '@material-ui/core';

export const renderDatePicker = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <div style={{ width: 200 }}>
            <InputLabel htmlFor="age-native-simple">Birthdate</InputLabel>
            <TextField
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={touched && error}
                {...input}
                {...custom}
            />
        </div>
    )