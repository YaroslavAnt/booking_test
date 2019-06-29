import React from 'react';
import { TextField } from '@material-ui/core';

export const renderTextField = ({
    field
}) => {
    return (
        <TextField
            label={field.name}
            placeholder={field.name}
            type={field.name}
            {...field}
        />
    )
}