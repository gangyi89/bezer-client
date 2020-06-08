import React from "react";

import AppBar from "../../layout/AppBar/AppBar";
import JoinSession from "../../components/JoinSession/JoinSession";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // adding custom margin for main container
  toolbar: {
    marginTop: theme.spacing(5),
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <JoinSession />
    </div>
  );
};

export default Landing;
