import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import emoji from "react-easy-emoji";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "../../../components/common/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  root: {
    padding: theme.spacing(2),
  },
  demographic: {
    padding: theme.spacing(2),
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  var inputRefs = [];

  const handleKeyPress = (e) => {
    const event = e;
    const { currentTarget } = e;
    if (event.key === "Enter") {
      let inputIndex = inputRefs.indexOf(currentTarget);
      if (inputIndex < inputRefs.length - 1) {
        inputRefs[inputIndex + 1].focus();
      } else {
        inputRefs[0].focus();
      }
      event.preventDefault();
    }
  };

  const handleClick = (e) => {
    console.log("clicked");
  };
  return (
    <>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={12}>
          <Paper>
            <Box
              className={classes.root}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography>Congratulations you are officially...</Typography>
              <Typography className={classes.demographic} variant="h5">
                {emoji("🎉")} Adult {emoji("🎉")}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className={classes.root}>
              <Typography variant="body2">
                Fill up your profile based on the assigned demographic
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  inputProps={{ onKeyPress: handleKeyPress }}
                  inputRef={(ref) => inputRefs.push(ref)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                />
                <TextField
                  inputProps={{ onKeyPress: handleKeyPress }}
                  inputRef={(ref) => inputRefs.push(ref)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="age"
                  label="age"
                  id="age"
                />
                <TextField
                  inputProps={{ onKeyPress: handleKeyPress }}
                  inputRef={(ref) => inputRefs.push(ref)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="occupation"
                  label="occupation"
                  id="occupation"
                />
                <TextField
                  inputRef={(ref) => inputRefs.push(ref)}
                  id="standard-textarea"
                  label="My values *"
                  margin="normal"
                  placeholder="My values *"
                  multiline
                  variant="outlined"
                  rows={5}
                  fullWidth
                />
                <TextField
                  inputRef={(ref) => inputRefs.push(ref)}
                  id="standard-textarea"
                  label="My priorities *"
                  placeholder="My priorities *"
                  multiline
                  margin="normal"
                  variant="outlined"
                  rows={5}
                  fullWidth
                />
                {/* {props.signInError === "" ? null : (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{props.signInError}</strong>
                  </Alert>
                )} */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                  onClick={handleClick}
                  isLoading={props.isLoading}
                >
                  Sign In
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
