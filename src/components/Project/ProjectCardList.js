import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AddProjectCard from "./AddProjectCard";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const ProjectCardList = (props) => {
  const classes = useStyles();

  console.log("project card list render");

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item>
        <AddProjectCard handleClickOpen={props.handleClickOpen} />
      </Grid>
      {props.projects.map((project) => (
        <Grid key={project.key} item>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCardList;
