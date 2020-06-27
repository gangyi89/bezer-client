import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
import CircularProgress from "@material-ui/core/CircularProgress";

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
  loading: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Profile = (props) => {
  console.log("profile render");
  const classes = useStyles();
  var inputRefs = [];
  const {
    getProfileHandler,
    getProfileError,
    getProfileLoading,
    profile,
    submitHandler,
    updateProfileLoading,
    updateProfileError,
  } = props;

  useEffect(() => {
    getProfileHandler();
  }, [getProfileHandler]);

  useEffect(() => {
    setName(profile.name || "");
    setAge(profile.age || "");
    setOccupation(profile.occupation || "");
    setValues(profile.values || "");
    setPriorities(profile.priorities || "");
  }, [profile]);

  //form information
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [values, setValues] = useState("");
  const [priorities, setPriorities] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateAge = (event) => {
    setAge(event.target.value);
  };
  const updateOccupation = (event) => {
    setOccupation(event.target.value);
  };
  const updateValues = (event) => {
    setValues(event.target.value);
  };
  const updatePriorities = (event) => {
    setPriorities(event.target.value);
  };

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
    submitHandler({
      ...profile,
      name: name,
      age: age,
      occupation: occupation,
      values: values,
      priorities: priorities,
    });
  };
  return (
    <>
      {getProfileLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
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
                  value={name}
                  onChange={updateName}
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
                  value={age}
                  onChange={updateAge}
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
                  value={occupation}
                  onChange={updateOccupation}
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
                  value={values}
                  onChange={updateValues}
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
                  value={priorities}
                  onChange={updatePriorities}
                />
                {updateProfileError === "" ? null : (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{updateProfileError}</strong>
                  </Alert>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                  onClick={handleClick}
                  isLoading={updateProfileLoading}
                >
                  Submit
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  getProfileError: PropTypes.string.isRequired,
  getProfileLoading: PropTypes.bool.isRequired,
  updateProfileError: PropTypes.string.isRequired,
  updateProfileLoading: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Profile;
