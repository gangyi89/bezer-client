import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import sunnyImg from "../../../../assets/images/sunny.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  image: {
    maxHeight: 36,
  },
  text: {
    marginLeft: 8,
  },
}));
const Stage = () => {
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.container}>
        <Typography component={"span"} variant="body2">
          <Box fontWeight="fontWeightBold">Stage</Box>
        </Typography>
        <Box display="flex" alignItems="center">
          <img src={sunnyImg} alt="day" className={classes.image} />
          <Typography variant="body1" className={classes.text}>
            Day 1 morning
          </Typography>
        </Box>
      </div>
    </Paper>
  );
};

export default Stage;
