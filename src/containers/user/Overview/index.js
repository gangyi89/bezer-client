import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Profile from "./Profile/Profile";
import Stage from "./Stage/Stage";
import Location from "./Location/Location";
import Event from "./Event/Event";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const Overview = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <Stage />
        </Grid>
        <Grid item xs={12}>
          <Location />
        </Grid>
        <Grid item xs={12}>
          <Event />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
