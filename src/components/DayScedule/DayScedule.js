import React from 'react';
import './DayScedule.scss'
import DaySceduleCell from '../DaySceduleCell/DaySceduleCell';
import { Typography } from '@material-ui/core';

const DayScedule = (props) => (
    <div className="day-scedule-wrapper">
        <div className="day-scedule mb-20">
            {new Array(8).fill(null).map((el, idx) => (
                <DaySceduleCell hours={10 + idx} {...props} key={idx} />
            ))}
        </div>

        <div className="flexbox align-center mb-20">
            <span className='marker marker-free mr-20'></span><Typography variant='subtitle1'> - is free</Typography>
        </div>

        <div className="flexbox align-center mb-20 ">
            <span className='marker marker-book mr-20'></span><Typography variant='subtitle1'> - is booked</Typography>
        </div>

        <div className="flexbox align-center mb-20 ">
            <span>*</span><Typography variant='subtitle1'> - your booking</Typography>
        </div>
    </div>
);

export default DayScedule;