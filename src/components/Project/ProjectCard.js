import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
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

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        component={Link}
        to={`/dashboard/${props.project.id}`}
        className={classes.cardActionArea}
      >
        <Box
          display="flex"
          className={classes.box}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <HomeIcon color="primary" className={classes.icon} />
          <Typography variant="body1" component="h2" color="primary">
            <Box fontWeight="500">{props.project.name}</Box>
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(ProjectCard);
