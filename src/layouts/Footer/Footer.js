import React from 'react';
import { Link } from "react-router-dom";

import { Typography, withStyles, Button } from '@material-ui/core';


const styles = theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#111",
    padding: 20
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Link to='/statistics'>
        <Button variant='contained' color='secondary'>Get Statistics</Button>
      </Link>
      <Typography align='right' color='secondary'> Made by Yaroslav Antonchyk </Typography>
    </div>
  )
};

export default withStyles(styles)(Footer);