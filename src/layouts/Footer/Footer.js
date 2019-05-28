import React from 'react';

import { Typography, withStyles } from '@material-ui/core';


const styles = theme => ({
  footer: {
    backgroundColor: "#111",
    padding: 20
  }
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Typography align='right' color='secondary'> Made by Yaroslav Antonchyk </Typography>
    </div>
  )
};

export default withStyles(styles)(Footer);