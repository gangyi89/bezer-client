import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import locationImg from "../../../../assets/images/location.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  image: {
    maxHeight: 32,
    marginTop: 8,
  },
  text: {
    marginLeft: 12,
  },
  button: {
    padding: 0,
    left: 4,
  },
}));
const Location = () => {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.container}>
        <Typography component={"span"} variant="body2">
          <Box fontWeight="fontWeightBold"> Current Location</Box>
        </Typography>
        <Box display="flex" alignItems="center">
          <img src={locationImg} alt="day" className={classes.image} />
          <Typography variant="body1" className={classes.text}>
            Office
          </Typography>
        </Box>
      </div>
    </Paper>
  );
};

export default Location;
