import React from "react";

import { green } from "@material-ui/core/colors";

import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { isLoading, ...others } = props;
  return (
    <div className={classes.wrapper}>
      <MuiButton {...others} disabled={isLoading}>
        {props.children}
      </MuiButton>
      {isLoading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
};

export default Button;
