import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import Button from "../../../../components/common/Button";
import EventDialog from "./EventDialog";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  image: {
    maxHeight: 36,
  },
  text: {
    marginLeft: 6,
  },
  icon: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.8),
    marginRight: theme.spacing(0.8),
  },
  button: {
    padding: 0,
    left: 4,
  },
}));
const Event = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper>
      <div className={classes.container}>
        <Typography component={"span"} variant="body2">
          <Box fontWeight="fontWeightBold">Events</Box>
        </Typography>
        <Box display="flex" alignItems="center">
          <NewReleasesOutlinedIcon color="secondary" className={classes.icon} />

          <Typography variant="body1" className={classes.text}>
            You have a new event!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
          >
            view
          </Button>
        </Box>
        <EventDialog handleClose={handleClose} open={open} />
      </div>
    </Paper>
  );
};

export default Event;
