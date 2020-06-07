import React from "react";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const MainHeaderBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" component="h1">
        {props.text}
      </Typography>
      <Divider className={classes.root} />
    </>
  );
};

export default MainHeaderBar;
