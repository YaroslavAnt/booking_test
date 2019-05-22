import React from 'react';
import { Link } from "react-router-dom";

import { Typography, Button, withStyles } from '@material-ui/core';

import './Footer.scss';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className="footer">
      <div>

        <Link to={'/sign-in'}>
          <Button variant='contained' color='secondary' className={classes.margin}>Sign In</Button>
        </Link>

        <Link to={'/sign-up'}>
          <Button variant='contained' color='secondary' className={classes.margin}>Sign Up</Button>
        </Link>

      </div>
      <Typography align='right' color='secondary'> Made by Yaroslav Antonchyk </Typography>
    </div>
  )
};

export default withStyles(styles)(Footer);