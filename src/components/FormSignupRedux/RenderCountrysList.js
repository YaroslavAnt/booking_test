import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'

export const renderCountrysList = ({
    label,
    input,
    meta: { touched, invalid, error },
}) => {
    console.log(input)
    return (
        <div style={{ width: 200 }}>
            <Select
                placeholder={label}
                // value={input.value.value}
                options={countryList().getData()}
                onChange={(value) => input.onChange(value)}
            />
        </div>
    )
}