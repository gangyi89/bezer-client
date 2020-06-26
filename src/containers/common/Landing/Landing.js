import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "../../../layout/AppBar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

import Button from "../../../components/common/Button";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright Â© "}
    <Link color="inherit" href="https://material-ui.com/">
      Solve - n+1
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inputText: {
    fontSize: 28,
    textAlign: "center",
    letterSpacing: 10,
  },
}));

const Landing = (props) => {
  const classes = useStyles();

  const [accessCode, setAccessCode] = useState("");

  const updateAccessCode = (event) => {
    setAccessCode(event.target.value);
  };

  const joinSession = () => {
    props.submitHandler(accessCode);
  };
  return (
    <div>
      <AppBar />
      <Container component="div" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <HomeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join a Community
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="accessCode"
              label="Game PIN"
              name="accessCode"
              autoFocus
              autoComplete="new-password"
              inputProps={{
                style: { fontSize: 28, textAlign: "center", letterSpacing: 10 },
              }}
              onChange={updateAccessCode}
              value={accessCode}
            />
            {props.accessCode !== undefined && props.joinSessionError === "" ? (
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Return to{" "}
                <RouterLink to={`/session/${props.accessCode}`}>
                  last session
                </RouterLink>
                ?
              </Alert>
            ) : null}
            {props.joinSessionError === "" ? null : (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{props.joinSessionError}</strong>
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={joinSession}
              size="large"
              isLoading={props.isLoading}
            >
              Join now
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} variant="body2" to="/login">
                  sign in as admin?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

Landing.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  joinSessionError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  accessCode: PropTypes.string,
};

export default Landing;
