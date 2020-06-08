import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Solve - n+1
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const JoinSession = () => {
  const classes = useStyles();
  let history = useHistory();

  const redirectUser = () => {
    history.push("/dashboard");
  };
  return (
    <Container component="div" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HomeOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join a Community
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            type="tel"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Game PIN"
            name="gamePin"
            autoFocus
            autoComplete="new-password"
            inputProps={{
              style: { fontSize: 28, textAlign: "center", letterSpacing: 10 },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={redirectUser}
            size="large"
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
  );
};

export default JoinSession;
