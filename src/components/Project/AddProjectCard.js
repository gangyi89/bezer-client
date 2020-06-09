import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    height: 200,
    borderRadius: 12,
  },
  cardActionArea: {
    height: "100%",
  },
  box: {
    height: "100%",
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
}));

const AddProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={props.handleClickOpen}
        className={classes.cardActionArea}
      >
        <Box
          display="flex"
          className={classes.box}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <AddIcon color="primary" className={classes.icon} />
          <Typography variant="body1" component="h2" color="primary">
            <Box fontWeight="500">Add Project</Box>
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default AddProjectCard;
